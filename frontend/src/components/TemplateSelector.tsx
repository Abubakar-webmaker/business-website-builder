import type { BusinessFormData } from "../types";

const templates = [
  {
    id: "modern",
    name: "Modern",
    desc: "Clean & Professional",
    colors: ["#6366f1", "#06b6d4", "#f8fafc"],
    preview: "🎯"
  },
  {
    id: "classic",
    name: "Classic",
    desc: "Elegant & Timeless",
    colors: ["#1e293b", "#f59e0b", "#fffbeb"],
    preview: "👔"
  },
  {
    id: "minimal",
    name: "Minimal",
    desc: "Simple & Focused",
    colors: ["#111827", "#6b7280", "#f9fafb"],
    preview: "✦"
  },
  {
    id: "bold",
    name: "Bold",
    desc: "Strong & Impactful",
    colors: ["#dc2626", "#1e293b", "#fff1f2"],
    preview: "⚡"
  },
];

interface Props {
  value: string;
  onChange: (val: BusinessFormData["template"]) => void;
}

const TemplateSelector = ({ value, onChange }: Props) => {
  return (
    <div>
      <label style={{ fontWeight: "600", fontSize: "14px", color: "#374151", display: "block", marginBottom: "10px" }}>
        Choose Template *
      </label>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
        {templates.map((t) => (
          <div
            key={t.id}
            onClick={() => onChange(t.id as BusinessFormData["template"])}
            style={{
              border: value === t.id ? "2px solid #6366f1" : "2px solid #e2e8f0",
              borderRadius: "12px",
              padding: "14px",
              cursor: "pointer",
              background: value === t.id ? "#eef2ff" : "white",
              transition: "all 0.2s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <span style={{ fontSize: "20px" }}>{t.preview}</span>
              <div>
                <div style={{ fontWeight: "600", fontSize: "14px", color: "#0f172a" }}>{t.name}</div>
                <div style={{ fontSize: "11px", color: "#64748b" }}>{t.desc}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "4px" }}>
              {t.colors.map((c, i) => (
                <div key={i} style={{
                  width: "20px", height: "8px",
                  background: c,
                  borderRadius: "4px",
                  border: "1px solid #e2e8f0"
                }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
