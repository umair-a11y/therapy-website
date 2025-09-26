export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    if (process.env.NODE_ENV !== "production") {
      console.warn("[CSP Report]", JSON.stringify(body));
    }
  } catch {
    // ignore
  }
  return new Response(null, { status: 204 });
}

