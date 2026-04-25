import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const title    = searchParams.get("title")   || "Hanane Risayindi";
  const excerpt  = searchParams.get("excerpt") || "Pensée · Identité · Visibilité";
  const date     = searchParams.get("date")    || "";
  const readTime = searchParams.get("rt")      || "";

  // Charge le background OG
  const bgUrl = new URL("/og-background.png", req.url).toString();

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          position: "relative",
          display: "flex",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bgUrl}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Zone texte gauche — sur fond semi-transparent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "520px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 56px",
          }}
        >

          {/* Méta date + temps de lecture */}
          {(date || readTime) && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "24px",
                fontSize: "13px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#B56A3A",
                fontFamily: "sans-serif",
              }}
            >
              {date && <span>{date}</span>}
              {date && readTime && (
                <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#B56A3A" }} />
              )}
              {readTime && <span>{readTime}</span>}
            </div>
          )}

          {/* Titre */}
          <div
            style={{
              fontSize: title.length > 50 ? "32px" : "40px",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "#211214",
              marginBottom: "20px",
              fontFamily: "Georgia, serif",
            }}
          >
            {title}
          </div>

          {/* Séparateur orange */}
          <div
            style={{
              width: "48px",
              height: "2px",
              background: "#C8581A",
              marginBottom: "20px",
            }}
          />

          {/* Excerpt */}
          <div
            style={{
              fontSize: "15px",
              lineHeight: 1.65,
              color: "#3A2025",
              fontFamily: "sans-serif",
              fontWeight: 300,
              maxWidth: "400px",
            }}
          >
            {excerpt.length > 120 ? excerpt.slice(0, 117) + "…" : excerpt}
          </div>

        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}