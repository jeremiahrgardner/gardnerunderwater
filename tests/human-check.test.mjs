import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { checkHuman } from '../lib/human-check.ts';

const previous = process.env.TURNSTILE_SECRET_KEY;
after(() => { if (previous === undefined) delete process.env.TURNSTILE_SECRET_KEY; else process.env.TURNSTILE_SECRET_KEY = previous; });
const req = new Request('https://example.com/api/contact', { method: 'POST', headers: { 'x-forwarded-for': '203.0.113.9, 10.0.0.1' } });
const reply = (data) => async () => new Response(JSON.stringify(data));
const good = { 'cf-turnstile-response': 'token', formMs: 8000 };

test('human check is off until the secret key is set', async () => {
  delete process.env.TURNSTILE_SECRET_KEY;
  assert.deepEqual(await checkHuman({}, req, reply({ success: false })), { ok: true, verified: true });
});

test('human check rejects missing tokens, instant submissions and failed tokens', async () => {
  process.env.TURNSTILE_SECRET_KEY = 'secret';
  assert.deepEqual(await checkHuman({ formMs: 8000 }, req, reply({ success: true })), { ok: false });
  assert.deepEqual(await checkHuman({ ...good, formMs: 900 }, req, reply({ success: true })), { ok: false });
  assert.deepEqual(await checkHuman(good, req, reply({ success: false, 'error-codes': ['invalid-input-response'] })), { ok: false });
  assert.deepEqual(await checkHuman(good, req, reply({ success: false, 'error-codes': ['timeout-or-duplicate'] })), { ok: false });
});

test('human check passes a valid token and sends secret, token and visitor IP', async () => {
  process.env.TURNSTILE_SECRET_KEY = 'secret';
  let sent;
  const result = await checkHuman(good, req, async (url, init) => { sent = { url, body: init.body.toString() }; return new Response('{"success":true}'); });
  assert.deepEqual(result, { ok: true, verified: true });
  assert.match(sent.url, /challenges\.cloudflare\.com/);
  assert.equal(sent.body, 'secret=secret&response=token&remoteip=203.0.113.9');
});

test('human check keeps inquiries but marks them unverified when Cloudflare is down or misconfigured', async () => {
  process.env.TURNSTILE_SECRET_KEY = 'secret';
  const quiet = console.error; console.error = () => {};
  try {
    assert.deepEqual(await checkHuman(good, req, async () => { throw new Error('down'); }), { ok: true, verified: false });
    assert.deepEqual(await checkHuman(good, req, reply({ success: false, 'error-codes': ['internal-error'] })), { ok: true, verified: false });
    assert.deepEqual(await checkHuman(good, req, reply({ success: false, 'error-codes': ['invalid-input-secret'] })), { ok: true, verified: false });
  } finally { console.error = quiet; }
});
