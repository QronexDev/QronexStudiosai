import type { APIRoute } from 'astro';

const GEMINI_API_KEY = 'AIzaSyAXI-yLqe4jfGv-abhQBNGDVOAXTEHThIY'; // reemplaza esto con tu API Key real

export const prerender = false;

export const post: APIRoute = async ({ request }) => {
  try {
    const { prompt } = await request.json();

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });

    const data = await response.json();

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No answer received.';

    return new Response(JSON.stringify({ answer: text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : String(error) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
