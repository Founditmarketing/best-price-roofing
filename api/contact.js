export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Email service not configured' });

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  const trim = (s, n = 300) => String(s || '').trim().slice(0, n);
  const name = trim(body.name, 200);
  const phone = trim(body.phone, 50);
  const address = trim(body.address, 300);
  const service = trim(body.service, 100);
  const roofAge = trim(body.roof_age || body.roofAge, 100);
  const email = trim(body.email, 200);

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required.' });
  }

  const esc = (s) => s.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));

  const row = (label, value) => value
    ? `<tr><td style="padding:8px 12px;background:#f6f3ee;border-bottom:1px solid #e8e2d6;font-weight:600;color:#5b4a32;width:140px;">${esc(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #e8e2d6;color:#1f1611;">${esc(value)}</td></tr>`
    : '';

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;color:#1f1611;">
      <div style="background:#1f1611;color:#f6f3ee;padding:18px 24px;">
        <div style="font-size:12px;letter-spacing:0.18em;color:#d2a679;">BEST PRICE ROOFING</div>
        <h1 style="margin:6px 0 0;font-size:20px;font-weight:600;">New free-inspection request</h1>
      </div>
      <table style="width:100%;border-collapse:collapse;background:#fff;">
        ${row('Name', name)}
        ${row('Phone', phone)}
        ${row('Email', email)}
        ${row('Address', address)}
        ${row('Concern', service)}
        ${row('Roof age', roofAge)}
      </table>
      <div style="background:#f6f3ee;padding:14px 24px;font-size:12px;color:#5b4a32;letter-spacing:0.04em;">
        Sent from bestpriceroofing.net contact form. Reply to call ${esc(name)} at ${esc(phone)}.
      </div>
    </div>`;

  const text = `New free-inspection request — Best Price Roofing\n\n`
    + `Name: ${name}\nPhone: ${phone}\n`
    + (email ? `Email: ${email}\n` : '')
    + (address ? `Address: ${address}\n` : '')
    + (service ? `Concern: ${service}\n` : '')
    + (roofAge ? `Roof age: ${roofAge}\n` : '');

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Best Price Roofing <hello@bestpriceroofing.net>',
        to: ['mbrown@premierrehabswla.com'],
        reply_to: email || undefined,
        subject: `New roof inspection request — ${name}${service ? ' · ' + service : ''}`,
        html,
        text,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error('Resend error:', resendRes.status, errText);
      return res.status(502).json({ error: 'Failed to send email.' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return res.status(500).json({ error: 'Unexpected error sending email.' });
  }
}
