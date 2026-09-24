import { ImageResponse } from "next/og";
import { facts, site } from "@/content/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Vista previa al compartir el link en LinkedIn o WhatsApp.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0e0e10",
          color: "#ededef",
        }}
      >
        <div style={{ fontSize: 34, color: "#a1a1aa" }}>{site.name}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              fontWeight: 600,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            <span>{site.role}</span>
            <span style={{ color: "#a1a1aa" }}>{site.stackLine}</span>
          </div>
          <div style={{ display: "flex", gap: 48, fontSize: 30, color: "#a1a1aa" }}>
            {facts.map((f) => (
              <div key={f.label} style={{ display: "flex", gap: 12 }}>
                <span style={{ color: "#8aa4ff" }}>{f.value}</span>
                <span>{f.label.split(",")[0]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
