// Adds a subscriber to the Sender.net group for the requested resource.
// The Sender automation attached to that group (configured in the Sender
// dashboard) is what actually emails the resource to the subscriber.
const RESOURCE_GROUPS = {
  'ai-docs-playbook': process.env.SENDER_GROUP_AI_DOCS_PLAYBOOK,
  'ai-doc-pipeline': process.env.SENDER_GROUP_AI_DOC_PIPELINE,
  'translation-pipeline': process.env.SENDER_GROUP_TRANSLATION_PIPELINE,
  'ai-ready-docs-framework': process.env.SENDER_GROUP_AI_READY_FRAMEWORK,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const body = event.isBase64Encoded
    ? Buffer.from(event.body || '', 'base64').toString('utf8')
    : event.body || '';
  const params = new URLSearchParams(body);

  // Honeypot: real users never fill this in.
  if ((params.get('bot-field') || '').trim() !== '') {
    return redirectTo('/success');
  }

  const email = (params.get('email') || '').trim();
  const firstName = (params.get('firstName') || '').trim();
  const lastName = (params.get('lastName') || '').trim();
  const resource = (params.get('resource') || '').trim();
  const groupId = RESOURCE_GROUPS[resource];

  if (!EMAIL_RE.test(email) || !groupId) {
    return redirectTo('/resources?subscribe_error=1');
  }

  const apiToken = process.env.SENDER_API_TOKEN;
  if (!apiToken) {
    console.error('SENDER_API_TOKEN is not set');
    return redirectTo('/resources?subscribe_error=1');
  }

  try {
    const res = await fetch('https://api.sender.net/v2/subscribers', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        ...(firstName && { firstname: firstName }),
        ...(lastName && { lastname: lastName }),
        groups: [groupId],
        trigger_automation: true,
      }),
    });

    if (!res.ok) {
      console.error(`Sender API error (${res.status}): ${await res.text()}`);
      return redirectTo('/resources?subscribe_error=1');
    }

    return redirectTo(`/success?resource=${encodeURIComponent(resource)}`);
  } catch (err) {
    console.error('Sender API request failed:', err);
    return redirectTo('/resources?subscribe_error=1');
  }
}

function redirectTo(location) {
  return {
    statusCode: 303,
    headers: { Location: location },
    body: '',
  };
}
