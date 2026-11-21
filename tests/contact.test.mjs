import test from 'node:test';
import assert from 'node:assert/strict';
import { handleContact } from '../lib/contact-request.ts';
import { relayInquiry, isRelayConfigured } from '../lib/contact-relay.ts';

const body = { name: 'Owner QA', email: 'qa@example.com', message: 'Training request', discovery: 'Google search', interest: 'Essentials of Tech', experience: 'Advanced', sourcePath: '/courses/essentials-of-tech' };
const request = (value = body, origin = 'https://gardnerunderwater.com') => new Request('https://gardnerunderwater.com/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json', origin }, body: JSON.stringify(value) });
const quiet = async (fn) => { const log = console.error; console.error = () => {}; try { return await fn(); } finally { console.error = log; } };
let seq = 0;
// The rate limiter is per email, so give each test its own address.
const fresh = () => ({ ...body, email: `qa${++seq}@example.com` });

test('saves first, then relays every detail with the same reference, visitor Reply-To and a confirmation', async () => {
  const value = fresh();
  let saved, relayed;
  const response = await handleContact(request(value), {
    save: async (...args) => { saved = args; },
    relay: async (inquiry) => { relayed = inquiry; return { notified: true, confirmed: true }; },
  });
  const data = await response.json();
  assert.equal(response.status, 200);
  assert.equal(data.success, true);
  assert.equal(saved[1], data.reference);
  assert.equal(relayed.reference, data.reference);
  assert.equal(relayed.site, 'gardnerunderwater.com');
  assert.equal(relayed.email, value.email);
  const text = relayed.fields.map((f) => f.join(': ')).join('\n');
  for (const key of ['message', 'discovery', 'interest', 'experience', 'sourcePath']) assert.ok(text.includes(value[key]), key);
  assert.equal(relayed.confirmation.replyTo, 'jay@gardnerunderwater.com');
  assert.match(relayed.confirmation.text, /^Hi Owner,/);
});

test('one working step is enough; both failing is an error that leaks nothing', async () => {
  const ok = async () => ({ notified: true, confirmed: true });
  const fail = async () => { throw new Error('private-provider-detail'); };
  assert.equal((await quiet(() => handleContact(request(fresh()), { save: fail, relay: ok }))).status, 200);
  assert.equal((await quiet(() => handleContact(request(fresh()), { save: async () => {}, relay: fail }))).status, 200);
  const response = await quiet(() => handleContact(request(fresh()), { save: fail, relay: fail }));
  const data = await response.json();
  assert.equal(response.status, 503);
  assert.equal(data.success, undefined);
  assert.ok(!data.error.includes('private-provider-detail'));
});

test('rejects invalid input, cross-origin submissions, honeypots and oversized bodies without saving or relaying', async () => {
  for (const req of [request({ ...body, email: 'victim@example.com\r\nBcc: attacker@example.com' }), request({ ...body, message: '' }), request(body, 'https://other.example'), request({ ...body, website: 'spam' }), request({ ...body, message: 'x'.repeat(17000) })]) {
    let touched = false;
    const response = await handleContact(req, { save: async () => { touched = true; }, relay: async () => { touched = true; return { notified: true, confirmed: true }; } });
    assert.ok(response.status >= 400);
    assert.equal(touched, false);
  }
});

test('relay needs URL and secret, only talks to Apps Script, and requires ok:true', async () => {
  const env = { ...process.env };
  try {
    delete process.env.CONTACT_RELAY_URL; delete process.env.CONTACT_RELAY_SECRET;
    assert.equal(isRelayConfigured(), false);
    const inquiry = { site: 'gardnerunderwater.com', reference: 'r', submittedAt: '2026-11-21T22:00:00Z', name: 'A', email: 'a@example.com', subject: 's', fields: [['Goals', '<b>text</b>']] };
    await assert.rejects(relayInquiry(inquiry), /not configured/);
    Object.assign(process.env, { CONTACT_RELAY_URL: 'https://evil.example/x', CONTACT_RELAY_SECRET: 's' });
    await assert.rejects(relayInquiry(inquiry), /Apps Script/);
    process.env.CONTACT_RELAY_URL = 'https://script.google.com/macros/s/test/exec';
    let sent;
    assert.deepEqual(await relayInquiry(inquiry, async (url, options) => { sent = JSON.parse(options.body); return Response.json({ ok: true, notified: true, confirmed: true }); }), { notified: true, confirmed: true });
    assert.equal(sent.secret, 's');
    await assert.rejects(relayInquiry(inquiry, async () => Response.json({ ok: false, error: 'unauthorized' })), /unauthorized/);
    await assert.rejects(relayInquiry(inquiry, async () => new Response('<html>', { status: 200 })), /unreadable/);
  } finally {
    for (const key of Object.keys(process.env)) if (!(key in env)) delete process.env[key];
    Object.assign(process.env, env);
  }
});
