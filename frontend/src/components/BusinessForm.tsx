import { useState } from "react";
import axios from "axios";
import type { BusinessFormData, ApiResponse } from "../types";
import TemplateSelector from "./TemplateSelector";

const initialState: BusinessFormData = {
  businessName: "",
  industry: "",
  tagline: "",
  description: "",
  services: "",
  location: "",
  phone: "",
  email: "",
  template: "modern",
};

const industries = [
  "Technology", "Healthcare", "Education", "Restaurant & Food",
  "Real Estate", "Fashion & Retail", "Finance", "Legal",
  "Construction", "Fitness & Wellness", "Beauty & Salon",
  "Photography", "Consulting", "E-commerce", "Other"
];

interface Props {
  onGenerate: (data: ApiResponse) => void;
  isLoading: boolean;
  setIsLoading: (v: boolean) => void;
}

const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  border: "1.5px solid #e2e8f0",
  borderRadius: "10px",
  fontSize: "14px",
  outline: "none",
  transition: "border 0.2s",
  background: "white",
  color: "#0f172a",
};

const labelStyle = {
  display: "block" as const,
  fontWeight: "600",
  fontSize: "13px",
  color: "#374151",
  marginBottom: "6px",
};

const apiBaseUrl = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/$/, "");

const BusinessForm = ({ onGenerate, isLoading, setIsLoading }: Props) => {
  const [form, setForm] = useState<BusinessFormData>(initialState);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.businessName || !form.industry || !form.template) {
      setError("Business Name, Industry aur Template required hain.");
      return;
    }
    setError("");
    setIsLoading(true);
    try {
      const res = await axios.post<ApiResponse>(
        `${apiBaseUrl}/api/generate`,
        form
      );
      onGenerate(res.data);
    } catch (err: unknown) {
      if (axios.isAxiosError<{ error?: string }>(err)) {
        setError(err.response?.data?.error || "Kuch ghalat ho gaya. Dobara try karo.");
      } else {
        setError("Kuch ghalat ho gaya. Dobara try karo.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      background: "white",
      borderRadius: "16px",
      padding: "28px",
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    }}>
      <div>
        <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#0f172a" }}>Business Details</h2>
        <p style={{ fontSize: "13px", color: "#64748b", marginTop: "4px" }}>
          Fill in your business info — AI will generate the content
        </p>
      </div>

      {/* Business Name */}
      <div>
        <label style={labelStyle}>Business Name *</label>
        <input name="businessName" value={form.businessName} onChange={handleChange}
          placeholder="e.g. Ahmed Tech Solutions" style={inputStyle} />
      </div>

      {/* Industry */}
      <div>
        <label style={labelStyle}>Industry *</label>
        <select name="industry" value={form.industry} onChange={handleChange} style={inputStyle}>
          <option value="">-- Select Industry --</option>
          {industries.map(i => <option key={i} value={i}>{i}</option>)}
        </select>
      </div>

      {/* Tagline */}
      <div>
        <label style={labelStyle}>Tagline</label>
        <input name="tagline" value={form.tagline} onChange={handleChange}
          placeholder="e.g. Building Digital Excellence" style={inputStyle} />
      </div>

      {/* Description */}
      <div>
        <label style={labelStyle}>Business Description</label>
        <textarea name="description" value={form.description} onChange={handleChange}
          placeholder="Apne business ke baare mein likho..."
          rows={3}
          style={{ ...inputStyle, resize: "vertical" as const }} />
      </div>

      {/* Services */}
      <div>
        <label style={labelStyle}>Services (comma separated)</label>
        <input name="services" value={form.services} onChange={handleChange}
          placeholder="e.g. Web Design, App Dev, SEO" style={inputStyle} />
      </div>

      {/* Location & Phone */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
        <div>
          <label style={labelStyle}>Location</label>
          <input name="location" value={form.location} onChange={handleChange}
            placeholder="Karachi, Pakistan" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Phone</label>
          <input name="phone" value={form.phone} onChange={handleChange}
            placeholder="+92 300 1234567" style={inputStyle} />
        </div>
      </div>

      {/* Email */}
      <div>
        <label style={labelStyle}>Email</label>
        <input name="email" type="email" value={form.email} onChange={handleChange}
          placeholder="hello@yourbusiness.com" style={inputStyle} />
      </div>

      {/* Template */}
      <TemplateSelector value={form.template}
        onChange={(val) => setForm(prev => ({ ...prev, template: val }))} />

      {/* Error */}
      {error && (
        <div style={{
          background: "#fef2f2", color: "#dc2626",
          padding: "10px 14px", borderRadius: "10px",
          fontSize: "13px", border: "1px solid #fecaca"
        }}>⚠️ {error}</div>
      )}

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        style={{
          background: isLoading ? "#a5b4fc" : "linear-gradient(135deg, #6366f1, #4f46e5)",
          color: "white",
          border: "none",
          padding: "14px",
          borderRadius: "12px",
          fontSize: "15px",
          fontWeight: "700",
          letterSpacing: "0.3px",
          transition: "all 0.2s",
          opacity: isLoading ? 0.8 : 1,
        }}
      >
        {isLoading ? "⏳ Generating Website..." : "✨ Generate My Website"}
      </button>
    </div>
  );
};

export default BusinessForm;
