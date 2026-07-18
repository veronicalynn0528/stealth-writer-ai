export interface Env {
  DEEPSEEK_API_KEY: string;
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const { text } = await context.request.json();
    
    if (!text || typeof text !== "string") {
      return new Response(JSON.stringify({ error: "Text is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${context.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content: "You are a writing assistant that rewrites text to sound more natural and human-like. Preserve the original meaning and tone. Remove AI-like patterns such as repetitive structures, overly formal language, and generic transitions. Make it sound like it was written by a real person."
          },
          {
            role: "user",
            content: `Rewrite this text to sound more natural and human-like:\n\n${text}`
          }
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("DeepSeek API error:", errorData);
      return new Response(JSON.stringify({ error: "Failed to process text" }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const humanizedText = data.choices?.[0]?.message?.content || text;

    return new Response(JSON.stringify({ humanizedText }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const onRequestOptions = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
