import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { text } = await request.json();
    
    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "Text is required" },
        { status: 400 }
      );
    }

    // Call DeepSeek API
    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.DEEPSEEK_API_KEY}`,
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
      return NextResponse.json(
        { error: "Failed to process text" },
        { status: 502 }
      );
    }

    const data = await response.json();
    const humanizedText = data.choices?.[0]?.message?.content || text;

    return NextResponse.json({ humanizedText });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
