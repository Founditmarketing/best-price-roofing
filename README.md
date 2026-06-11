# Best Price Roofing

Static single-page site with a Resend-backed contact form. Deployed via Vercel from `main`.

- Live: https://best-price-roofing.vercel.app
- Contact API: `api/contact.js` — POSTs to Resend using `RESEND_API_KEY` (Vercel env var). Currently routes inquiries to `0nleiter@gmail.com` for testing.
- Form: `index.html` — 3-step quote form (`#quoteForm`) posts JSON to `/api/contact`.

## Local development

This is a plain static site. Any HTTP server works:

```
python3 -m http.server 8000
```

The `api/contact.js` function only runs on Vercel.
