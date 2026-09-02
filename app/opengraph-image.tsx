import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Frederico Ferreira Advocacia — Direito Previdenciário, Trabalhista e Empresarial";
export const dynamic = "force-static";

export default function opengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f1e33",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 16 }}>
          <div style={{ width: 40, height: 2, background: "#d1b27d" }} />
          <span style={{ fontSize: 22, letterSpacing: 8, color: "#d1b27d", textTransform: "uppercase" }}>
            Frederico Ferreira Advocacia
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 64, color: "#f8f6f1", lineHeight: 1.12, maxWidth: 900 }}>
            Do outro lado da mesa, ninguém vai defender você. É exatamente para isso que existimos.
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 28, color: "#d1b27d" }}>
            Previdenciário · Trabalhista · Empresarial
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 18, color: "#8fa1b8", fontFamily: "Arial, sans-serif" }}>
            advfredericoferreira.com
          </span>
          <span style={{ fontSize: 18, color: "#8fa1b8", fontFamily: "Arial, sans-serif" }}>
            Análise honesta. Linguagem clara.
          </span>
        </div>
      </div>
    ),
    size
  );
}
