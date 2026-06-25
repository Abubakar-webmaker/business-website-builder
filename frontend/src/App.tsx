import { useState } from "react";
import Navbar from "./components/Navbar";
import BusinessForm from "./components/BusinessForm";
import WebsitePreview from "./components/WebsitePreview";
import type { ApiResponse } from "./types";

function App() {
  const [result, setResult] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "#f1f5f9" }}>
      <Navbar />

      {/* Hero Banner */}
      {!result && (
        <div style={{
          background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
          padding: "60px 2rem",
          textAlign: "center",
          color: "white",
        }}>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: "800", marginBottom: "1rem", letterSpacing: "-1px" }}>
            Build Your Business Website
          </h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.88, maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            Fill in your details — AI generates professional content & a complete website in seconds
          </p>
        </div>
      )}

      {/* Main Content */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem",
        display: result ? "grid" : "block",
        gridTemplateColumns: result ? "400px 1fr" : "1fr",
        gap: "2rem",
        alignItems: "start",
      }}>
        {/* Form */}
        <div style={{ maxWidth: result ? "100%" : "560px", margin: result ? "0" : "0 auto" }}>
          <BusinessForm
            onGenerate={setResult}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </div>

        {/* Preview */}
        {result && (
          <div>
            <WebsitePreview data={result} />
          </div>
        )}
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div style={{
          position: "fixed", inset: 0,
          background: "rgba(15, 23, 42, 0.6)",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 999, backdropFilter: "blur(4px)",
        }}>
          <div style={{
            background: "white", borderRadius: "20px",
            padding: "2.5rem 3rem", textAlign: "center",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✨</div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "0.5rem" }}>
              AI is building your website...
            </h3>
            <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
              Generating professional content & design
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
