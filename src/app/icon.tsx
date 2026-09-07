import { ImageResponse } from "next/og";

// Favicon — generated as a PNG (Google's search results and browsers pick up
// raster favicons more reliably than SVG). A bold "G1" wordmark on the brand
// teal, legible down to 16px.
export const size = { width: 96, height: 96 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0E7C6B",
          borderRadius: 22,
          color: "#ffffff",
          fontSize: 58,
          fontWeight: 800,
          fontFamily: "sans-serif",
          letterSpacing: -3,
        }}
      >
        G1
      </div>
    ),
    { ...size },
  );
}
