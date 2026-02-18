import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GreatTastemaker — Your Product Deserves a Better Story";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#1A1A18",
          color: "#FAFAF7",
          padding: "60px",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            width: "60px",
            height: "3px",
            backgroundColor: "#C8A24E",
            marginBottom: "40px",
          }}
        />

        {/* Wordmark */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          GreatTastemaker
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            color: "#B0AFA8",
            marginTop: "20px",
            fontWeight: 400,
          }}
        >
          Your Product Deserves a Better Story
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            width: "60px",
            height: "3px",
            backgroundColor: "#C8A24E",
            marginTop: "40px",
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontSize: "18px",
            color: "#6B6B63",
            marginTop: "24px",
          }}
        >
          GTM Engine for B2B Companies
        </div>
      </div>
    ),
    { ...size }
  );
}
