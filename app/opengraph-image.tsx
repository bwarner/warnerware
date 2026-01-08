import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "WarnerWare - Byron Warner";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
      }}
    >
      {/* Logo placeholder - using text since we can't load external images easily */}
      <div
        style={{
          fontSize: 72,
          fontWeight: 700,
          color: "#ffffff",
          marginBottom: 20,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span style={{ color: "#3b82f6" }}>88</span>
        <span>WarnerWare</span>
      </div>
      <div
        style={{
          fontSize: 32,
          color: "#9ca3af",
          textAlign: "center",
          maxWidth: 800,
        }}
      >
        Byron Warner - Engineering Leader & Full-Stack Developer
      </div>
      <div
        style={{
          fontSize: 24,
          color: "#6b7280",
          marginTop: 20,
        }}
      >
        warnerware.com
      </div>
    </div>,
    {
      ...size,
    },
  );
}
