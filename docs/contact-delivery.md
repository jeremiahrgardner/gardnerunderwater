# Consultation email delivery

The browser posts to `/api/contact`. The server validates and bounds the request,
checks origin and a honeypot, applies an instance-local rate limit, and emails the
consultation details. The client reports success only after provider acceptance.
Actual inbox receipt still requires a controlled production test.

## Recommended: existing Google Workspace mailbox

Configure these production environment variables securely in Vercel:

```text
CONTACT_EMAIL_PROVIDER=gmail
CONTACT_EMAIL_FROM=j@jeremiahgardner.com
CONTACT_EMAIL_TO=jay@gardnerunderwater.com
GMAIL_CLIENT_ID=<OAuth client ID>
GMAIL_CLIENT_SECRET=<OAuth client secret>
GMAIL_REFRESH_TOKEN=<refresh token authorized for gmail.send on the owner's mailbox>
```

Use a durable OAuth configuration: an external app left in testing mode can have
short-lived refresh tokens. Never paste credentials into chat or commit them.
The default recipient alias must deliver to the owner's existing Workspace inbox.
No extra mailbox or form service subscription is required by this implementation.

An existing Resend account can alternatively be used with
`CONTACT_EMAIL_PROVIDER=resend`, `RESEND_API_KEY`, a verified `CONTACT_EMAIL_FROM`,
and the same recipient. Do not create a new paid service just for this form.

## Before enabling production

1. Confirm the existing Vercel project and production branch; preserve newer work.
2. Configure credentials and redeploy. Enable a WAF rate rule for `/api/contact`;
   the code's local limiter does not enforce limits across serverless instances.
3. Submit an owner-controlled inquiry. Check receipt, all fields, and Reply-To.
4. Check failed-provider behavior: no success message; details remain retryable.
5. Confirm the privacy page matches the enabled email provider and retention policy.

The handler never allows visitors to select recipients or From. No user email is
sent until validated; errors do not log personal details or provider credentials.
