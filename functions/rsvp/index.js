const functions = require('@google-cloud/functions-framework');

function asBoolean(value) {
  return value === true || value === 'true';
}

function asText(value) {
  return typeof value === 'string' ? value : '';
}

functions.http('rsvp', async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const token = asText(body.token);
  const firstName = asText(body.firstName);
  const lastName = asText(body.lastName);
  const withPartner = asBoolean(body.withPartner);
  const withChild = asBoolean(body.withChild);
  const extraInfo = asText(body.extraInfo);

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    res.status(500).json({ ok: false, error: 'Telegram is not configured' });
    return;
  }

  const text = [
    'Новый ответ RSVP',
    `Токен: ${token || '—'}`,
    `Имя: ${firstName || '—'}`,
    `Фамилия: ${lastName || '—'}`,
    `Со второй половинкой: ${withPartner ? 'да' : 'нет'}`,
    `С ребёнком: ${withChild ? 'да' : 'нет'}`,
    `Дополнительная информация: ${extraInfo || '—'}`,
  ].join('\n');

  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    if (!telegramResponse.ok) {
      res.status(502).json({ ok: false, error: 'Telegram request failed' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch {
    res.status(502).json({ ok: false, error: 'Telegram request failed' });
  }
});
