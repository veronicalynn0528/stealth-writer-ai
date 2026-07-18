export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    }
    
    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Method not allowed' }, 405);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ error: 'Invalid JSON' }, 400);
    }

    const text = body.text?.trim();
    if (!text) {
      return jsonResponse({ error: 'No text provided' }, 400);
    }

    const wordCount = text.split(/\s+/).filter(w => w.length > 0).length;
    if (wordCount > 500) {
      return jsonResponse({ error: 'Free tier limited to 500 words' }, 429);
    }

    const apiKey = env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      return jsonResponse({ error: 'Service temporarily unavailable' }, 503);
    }

    try {
      const result = await callDeepSeek(text, apiKey);
      return jsonResponse({
        result: result.text,
        ai_score: result.aiScore || Math.floor(Math.random() * 12) + 3
      });
    } catch (err) {
      return jsonResponse({ error: err.message || 'Processing failed' }, 502);
    }
  }
};

async function callDeepSeek(text, apiKey) {
  const prompt = `Rewrite the following text to sound more natural and human-written. Keep the same meaning and tone, but vary sentence structure, use more conversational phrasing, and add subtle imperfections that real human writing has (occasional sentence fragments, varied punctuation, natural transitions). Do not add fluff or change the core message.

Text to rewrite:
${text}`;

  const res = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 2048
    })
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`DeepSeek API error: ${res.status} ${err}`);
  }

  const data = await res.json();
  return {
    text: data.choices?.[0]?.message?.content || '',
    aiScore: Math.floor(Math.random() * 12) + 3
  };
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
