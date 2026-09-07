import { ImageResponse } from "next/og";

// Apple touch icon (home-screen). Full-bleed teal; iOS applies its own rounding.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F8670",
          color: "#ffffff",
          fontSize: 104,
          fontWeight: 800,
          fontFamily: "sans-serif",
          letterSpacing: -5,
        }}
      >
        G1
      </div>
    ),
    { ...size },
  );
}
