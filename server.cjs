/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// Config (env overrides, with the provided defaults)
const VERIFY_TOKEN = 'EAAfg3ZCL0teIBPqv0IglXSrjwNShUC8TVmGqjauKHZBCHZCMhFAZBQQYYQOuCu9XvXI7uSx6awONY3csph5SzbHPX0dNvswsoSj2gKr68Buk3Kxs1qM9x8JgwDGqsCvvm0UZCZBYfvj8AXX3BZAY8b7q9oZCK3Ox8Mmzy0mGy8jGHrkjfHKwczoWCNttGJo6ZBx4nNcbrNfyxBZB60oSuDiXSvJzFPH07TATGPVZAIX7iBkrDr7xwZDZD';
const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN || 'yashwebhook123';
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID || '785746171296880';

// Per requirement 5: use this exact messages endpoint URL
const GRAPH_URL = 'https://graph.facebook.com/v22.0/785746171296880/messages';

// Health check (optional)
app.get('/', (_req, res) => {
  res.status(200).send('WhatsApp webhook is running.');
});

// 1) GET /webhook - verification
app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('Webhook verified.');
    return res.status(200).send(challenge);
  }

  console.warn('Webhook verification failed.');
  return res.sendStatus(403);
});

// Helper: send WhatsApp reply
async function sendWhatsAppReply(to) {
  try {
    const payload = {
      messaging_product: 'whatsapp',
      to,
      text: { body: 'https://review.sccinfotech.com/' },
    };

    const resp = await fetch(GRAPH_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const errText = await resp.text().catch(() => '');
      console.error('Failed to send message:', resp.status, resp.statusText, errText);
      return;
    }

    const data = await resp.json().catch(() => ({}));
    console.log('Message sent:', data);
  } catch (err) {
    console.error('Error sending message:', err);
  }
}

// 2) POST /webhook - receive messages
app.post('/webhook', async (req, res) => {
  console.log('Incoming webhook event:', JSON.stringify(req.body, null, 2));
  res.sendStatus(200);

  try {
    const entries = req.body?.entry || [];
    for (const entry of entries) {
      const changes = entry?.changes || [];
      for (const change of changes) {
        const value = change?.value || {};
        const messages = value?.messages || [];

        for (const msg of messages) {
          const from = msg?.from;
          const textBody = msg?.text?.body;

          if (from && textBody) {
            console.log(`Received text from ${from}:`, textBody);
            await sendWhatsAppReply(from);
          }
        }
      }
    }
  } catch (err) {
    console.error('Error processing webhook:', err);
  }
});

// Start server (supports platforms that inject PORT)
const PORT = process.env.PORT || 3000;

// Listen only when run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`WhatsApp webhook server listening on port ${PORT}`);
    console.log(`Using PHONE_NUMBER_ID=${PHONE_NUMBER_ID}`);
  });
}

module.exports = app;