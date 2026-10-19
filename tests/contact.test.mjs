import test from 'node:test';
import assert from 'node:assert/strict';
import { handleContact } from '../lib/contact-request.ts';
import { deliverContact } from '../lib/contact-delivery.ts';

const body = { name: 'Owner QA', email: 'qa@example.com', message: 'Training request', discovery: 'Google search', interest: 'Essentials of Tech', experience: 'Advanced', sourcePath: '/courses/essentials-of-tech' };
const request = (value = body, origin = 'https://gardnerunderwater.com') => new Request('https://gardnerunderwater.com/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json', origin }, body: JSON.stringify(value) });

test('sends all inquiry details and sets visitor Reply-To only after acceptance', async () => {
  let sent;
  const response = await handleContact(request(), async (...args) => { sent = args; });
  assert.equal(response.status, 200);
  assert.equal((await response.json()).success, true);
  assert.equal(sent[2], body.email);
  for (const value of Object.values(body)) assert.ok(sent[1].includes(value));
});

test('rejects invalid input, cross-origin submissions, honeypots and oversized bodies without sending', async () => {
  for (const req of [request({ ...body, email: 'victim@example.com\r\nBcc: attacker@example.com' }), request({ ...body, message: '' }), request(body, 'https://other.example'), request({ ...body, website: 'spam' }), request({ ...body, message: 'x'.repeat(17000) })]) {
    let sent = false;
    const response = await handleContact(req, async () => { sent = true; });
    assert.ok(response.status >= 400);
    assert.equal(sent, false);
  }
});

test('provider failures do not claim success or expose provider errors', async () => {
  const response = await handleContact(request(), async () => { throw new Error('private-provider-detail'); });
  const data = await response.json();
  assert.equal(response.status, 503);
  assert.equal(data.success, undefined);
  assert.ok(!data.error.includes('private-provider-detail'));
});

test('Gmail transport uses fixed owner routing, plain text and visitor Reply-To', async () => {
  const env = { ...process.env };
  const originalFetch = global.fetch;
  try {
    Object.assign(process.env, { CONTACT_EMAIL_PROVIDER: 'gmail', GMAIL_CLIENT_ID: 'test', GMAIL_CLIENT_SECRET: 'test', GMAIL_REFRESH_TOKEN: 'test', CONTACT_EMAIL_FROM: 'j@jeremiahgardner.com', CONTACT_EMAIL_TO: 'jay@gardnerunderwater.com' });
    const calls = [];
    global.fetch = async (url, options) => {
      calls.push([url, options]);
      return Response.json(calls.length === 1 ? { access_token: 'test' } : { id: 'accepted' });
    };
    await deliverContact('Owner QA', 'Details <script>remain text</script>', 'visitor@example.com');
    const mime = Buffer.from(JSON.parse(calls[1][1].body).raw, 'base64url').toString();
    assert.match(mime, /To: jay@gardnerunderwater.com/);
    assert.match(mime, /From: j@jeremiahgardner.com/);
    assert.match(mime, /Reply-To: visitor@example.com/);
    assert.match(mime, /Content-Type: text\/plain/);
  } finally {
    global.fetch = originalFetch;
    for (const key of Object.keys(process.env)) if (!(key in env)) delete process.env[key];
    Object.assign(process.env, env);
  }
});
