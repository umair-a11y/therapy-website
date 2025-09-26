import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get("title") || "Resolve Men's Therapy").slice(0, 120);
  const subtitle = (searchParams.get("subtitle") || "Professional mental health support in Ontario").slice(0, 140);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #1f6f54 0%, #6faf97 100%)",
          color: "#fff",
          padding: "60px 80px",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{
          fontSize: 40,
          opacity: 0.9,
          marginBottom: 20,
        }}>
          Resolve Men's Therapy
        </div>
        <div style={{
          fontSize: 80,
          fontWeight: 800,
          lineHeight: 1.1,
          maxWidth: 1000,
        }}>
          {title}
        </div>
        <div style={{
          fontSize: 36,
          opacity: 0.9,
          marginTop: 24,
          maxWidth: 1000,
        }}>
          {subtitle}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
