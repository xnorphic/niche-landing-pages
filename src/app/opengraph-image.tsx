import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Niche Landing Pages";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "#f0f0ee",
          color: "#1a1a18",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 600, letterSpacing: -1 }}>
          Niche Landing Pages
        </div>
        <div style={{ marginTop: 16, fontSize: 28, color: "#5c5c58" }}>
          Doctors · Interior · HVAC · Jewellery
        </div>
      </div>
    ),
    { ...size },
  );
}
