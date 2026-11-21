# Contact form delivery

The contact form works the same way as jeremiahgardner.com's and uses the same receiver.

1. `/api/contact` validates the request.
2. It saves the request privately in this project's Vercel Blob store: `inquiries/YYYY-MM-DD/<reference>.json`.
3. It posts the request to the shared contact forms receiver, a Google Apps Script. The receiver adds a row to the **gardnerunderwater.com** tab of the Contact forms sheet, emails the notification to jay@gardnerunderwater.com (Reply-To is the visitor), and sends the visitor a confirmation.
4. The visitor sees success, with a reference number, if step 2 **or** step 3 worked. If both fail, they see an error and keep what they typed.

The receiver script and its setup steps live in the jeremiahgardner.com repo: `integrations/contact-receiver/`.

## Production environment (Vercel)

```
BLOB_READ_WRITE_TOKEN=<already set by the connected Blob store>
CONTACT_RELAY_URL=<Apps Script web app URL, https://script.google.com/...>
CONTACT_RELAY_SECRET=<same secret as the script property; mark Sensitive>
# Optional
# CONTACT_REPLY_TO=jay@gardnerunderwater.com
# CONTACT_CONFIRMATION_ENABLED=false
```

Where notifications go is set in the script (`NOTIFY_GARDNERUNDERWATER`), not here. Never log form contents; failures log only the reference.
