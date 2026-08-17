import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const alt = "Adera SMS: Miss a call. Adera responds.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  let logoBase64 = "";
  try {
    const logoPath = path.join(process.cwd(), "public", "aderasms-logo-transparent.png");
    if (fs.existsSync(logoPath)) {
      const logoBuffer = fs.readFileSync(logoPath);
      logoBase64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;
    }
  } catch {
    logoBase64 = "";
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: "#050b08",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Glow gradients */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "200px",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)",
          }}
        />

        {/* Top bar: Brand + Android badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {logoBase64 ? (
              <img src={logoBase64} width={72} height={72} alt="Logo" />
            ) : (
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  background: "#10b981",
                }}
              />
            )}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "36px",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                Adera <span style={{ color: "#34d399" }}>SMS</span>
              </span>
              <span style={{ fontSize: "18px", color: "#9ca3af", fontWeight: 500 }}>
                Automated Missed Call Response
              </span>
            </div>
          </div>

          <div
            style={{
              padding: "10px 24px",
              borderRadius: "999px",
              background: "rgba(16, 185, 129, 0.12)",
              border: "1px solid rgba(52, 211, 153, 0.3)",
              color: "#34d399",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            Android App
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "960px", gap: "24px" }}>
          <h1
            style={{
              fontSize: "76px",
              fontWeight: 900,
              lineHeight: 1.05,
              color: "#ffffff",
              letterSpacing: "-0.04em",
              margin: 0,
            }}
          >
            Miss a call. <br />
            <span style={{ color: "#34d399" }}>Adera responds.</span>
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "#d1d5db",
              lineHeight: 1.4,
              margin: 0,
              maxWidth: "840px",
            }}
          >
            Automatically send a text message when you miss a call so callers know you’ll get back to them.
          </p>
        </div>

        {/* Bottom indicator */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
            fontSize: "20px",
            color: "#9ca3af",
            fontWeight: 500,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }} />
            <span>100% Local On-Device</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#fbbf24" }} />
            <span>Instant Dispatch</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#34d399" }} />
            <span>Free APK Download</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
