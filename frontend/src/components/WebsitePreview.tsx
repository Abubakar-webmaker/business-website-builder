import type { ApiResponse } from "../types";

const themes = {
  modern: {
    primary: "#6366f1",
    secondary: "#06b6d4",
    bg: "#f8fafc",
    text: "#0f172a",
    navBg: "#6366f1",
    heroBg: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
    cardBg: "white",
    accent: "#06b6d4",
  },
  classic: {
    primary: "#1e293b",
    secondary: "#f59e0b",
    bg: "#fffbeb",
    text: "#1e293b",
    navBg: "#1e293b",
    heroBg: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
    cardBg: "#fffbeb",
    accent: "#f59e0b",
  },
  minimal: {
    primary: "#111827",
    secondary: "#6b7280",
    bg: "#f9fafb",
    text: "#111827",
    navBg: "#111827",
    heroBg: "linear-gradient(135deg, #111827 0%, #374151 100%)",
    cardBg: "white",
    accent: "#6b7280",
  },
  bold: {
    primary: "#dc2626",
    secondary: "#1e293b",
    bg: "#fff1f2",
    text: "#111827",
    navBg: "#dc2626",
    heroBg: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
    cardBg: "white",
    accent: "#dc2626",
  },
};

interface Props {
  data: ApiResponse;
}

const WebsitePreview = ({ data }: Props) => {
  const { content, businessData } = data;
  const theme = themes[businessData.template as keyof typeof themes] || themes.modern;

  const generateHTML = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${businessData.businessName}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', -apple-system, sans-serif; background: ${theme.bg}; color: ${theme.text}; }
    nav { background: ${theme.navBg}; padding: 0 2rem; height: 64px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 100; }
    nav .logo { color: white; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
    nav ul { list-style: none; display: flex; gap: 2rem; }
    nav ul a { color: rgba(255,255,255,0.85); text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; }
    nav ul a:hover { color: white; }
    .hero { background: ${theme.heroBg}; color: white; padding: 100px 2rem; text-align: center; }
    .hero h1 { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; line-height: 1.15; margin-bottom: 1.2rem; letter-spacing: -1px; }
    .hero p { font-size: 1.2rem; opacity: 0.88; max-width: 560px; margin: 0 auto 2.2rem; line-height: 1.7; }
    .hero-btn { background: white; color: ${theme.primary}; padding: 14px 36px; border-radius: 50px; font-size: 16px; font-weight: 700; text-decoration: none; display: inline-block; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 4px 20px rgba(0,0,0,0.15); }
    .hero-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,0,0,0.2); }
    section { padding: 80px 2rem; max-width: 1100px; margin: 0 auto; }
    .section-title { font-size: 2rem; font-weight: 800; text-align: center; margin-bottom: 0.6rem; letter-spacing: -0.5px; }
    .section-sub { text-align: center; color: #64748b; margin-bottom: 3rem; font-size: 1rem; }
    .about-content { max-width: 700px; margin: 0 auto; text-align: center; font-size: 1.05rem; line-height: 1.85; color: #475569; }
    .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
    .service-card { background: ${theme.cardBg}; border-radius: 16px; padding: 2rem; border: 1.5px solid #e2e8f0; transition: transform 0.2s, box-shadow 0.2s; }
    .service-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.1); }
    .service-icon { font-size: 2.4rem; margin-bottom: 1rem; }
    .service-card h3 { font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem; }
    .service-card p { color: #64748b; font-size: 0.95rem; line-height: 1.7; }
    .why-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }
    .why-card { background: ${theme.cardBg}; border-radius: 14px; padding: 1.5rem; border-left: 4px solid ${theme.accent}; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
    .why-card h3 { font-weight: 700; margin-bottom: 0.4rem; font-size: 1rem; }
    .why-card p { color: #64748b; font-size: 0.9rem; line-height: 1.6; }
    .testimonial { background: ${theme.heroBg}; border-radius: 20px; padding: 3rem; text-align: center; color: white; max-width: 700px; margin: 0 auto; }
    .testimonial blockquote { font-size: 1.15rem; line-height: 1.8; margin-bottom: 1.5rem; opacity: 0.95; font-style: italic; }
    .testimonial .author { font-weight: 700; font-size: 1rem; }
    .testimonial .role { font-size: 0.9rem; opacity: 0.8; }
    .contact-box { background: white; border-radius: 20px; padding: 3rem; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 30px rgba(0,0,0,0.1); border: 1.5px solid #e2e8f0; }
    .contact-info { display: flex; flex-direction: column; gap: 1rem; }
    .contact-item { display: flex; align-items: center; gap: 12px; font-size: 1rem; color: #475569; }
    .contact-item span:first-child { font-size: 1.4rem; }
    footer { background: ${theme.navBg}; color: rgba(255,255,255,0.85); text-align: center; padding: 2.5rem 2rem; }
    footer .footer-name { font-size: 1.4rem; font-weight: 800; color: white; margin-bottom: 0.4rem; }
    footer p { font-size: 0.9rem; opacity: 0.7; }
    .divider { height: 1px; background: #e2e8f0; max-width: 1100px; margin: 0 auto; }
    @media (max-width: 768px) {
      .hero { padding: 70px 1.2rem; }
      section { padding: 60px 1.2rem; }
      nav ul { display: none; }
    }
  </style>
</head>
<body>
  <nav>
    <div class="logo">${businessData.businessName}</div>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <div class="hero">
    <h1>${content.hero.headline}</h1>
    <p>${content.hero.subheadline}</p>
    <a href="#contact" class="hero-btn">${content.hero.cta}</a>
  </div>

  <section id="about">
    <div class="section-title">${content.about.title}</div>
    <div class="section-sub">Who We Are</div>
    <div class="about-content">${content.about.content}</div>
  </section>

  <div class="divider"></div>

  <section id="services">
    <div class="section-title">Our Services</div>
    <div class="section-sub">What We Offer</div>
    <div class="services-grid">
      ${content.services.map(s => `
        <div class="service-card">
          <div class="service-icon">${s.icon}</div>
          <h3>${s.title}</h3>
          <p>${s.description}</p>
        </div>
      `).join("")}
    </div>
  </section>

  <div class="divider"></div>

  <section>
    <div class="section-title">${content.whyUs.title}</div>
    <div class="section-sub">Why Clients Choose Us</div>
    <div class="why-grid">
      ${content.whyUs.points.map(p => `
        <div class="why-card">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
        </div>
      `).join("")}
    </div>
  </section>

  <div class="divider"></div>

  <section>
    <div class="section-title">What Clients Say</div>
    <div class="section-sub">Real Feedback</div>
    <div class="testimonial">
      <blockquote>"${content.testimonial.quote}"</blockquote>
      <div class="author">— ${content.testimonial.author}</div>
      <div class="role">${content.testimonial.role}</div>
    </div>
  </section>

  <div class="divider"></div>

  <section id="contact">
    <div class="section-title">${content.contact.title}</div>
    <div class="section-sub">${content.contact.subtitle}</div>
    <div class="contact-box">
      <div class="contact-info">
        ${businessData.phone ? `<div class="contact-item"><span>📞</span><span>${businessData.phone}</span></div>` : ""}
        ${businessData.email ? `<div class="contact-item"><span>✉️</span><span>${businessData.email}</span></div>` : ""}
        ${businessData.location ? `<div class="contact-item"><span>📍</span><span>${businessData.location}</span></div>` : ""}
      </div>
    </div>
  </section>

  <footer>
    <div class="footer-name">${businessData.businessName}</div>
    <p>${content.footer.tagline}</p>
    <p style="margin-top: 1rem;">© ${new Date().getFullYear()} ${businessData.businessName}. All rights reserved.</p>
  </footer>
</body>
</html>`;
  };

  const handleDownload = () => {
    const html = generateHTML();
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${businessData.businessName.replace(/\s+/g, "-").toLowerCase()}-website.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Action Bar */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "white", padding: "14px 20px", borderRadius: "14px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0"
      }}>
        <div>
          <span style={{ fontWeight: "700", fontSize: "15px", color: "#0f172a" }}>
            ✅ Website Ready!
          </span>
          <span style={{
            marginLeft: "10px", background: "#f0fdf4", color: "#16a34a",
            padding: "3px 10px", borderRadius: "20px", fontSize: "12px", fontWeight: "600"
          }}>
            {businessData.template.toUpperCase()} Template
          </span>
        </div>
        <button
          onClick={handleDownload}
          style={{
            background: "linear-gradient(135deg, #6366f1, #4f46e5)",
            color: "white", border: "none",
            padding: "10px 22px", borderRadius: "10px",
            fontSize: "14px", fontWeight: "700",
            display: "flex", alignItems: "center", gap: "6px",
          }}
        >
          ⬇️ Download HTML
        </button>
      </div>

      {/* Live Preview */}
      <div style={{
        background: "white", borderRadius: "16px",
        overflow: "hidden", border: "1.5px solid #e2e8f0",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)"
      }}>
        <div style={{
          background: "#f1f5f9", padding: "10px 16px",
          display: "flex", alignItems: "center", gap: "8px",
          borderBottom: "1px solid #e2e8f0"
        }}>
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444" }} />
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#f59e0b" }} />
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#10b981" }} />
          <span style={{ marginLeft: "8px", fontSize: "12px", color: "#64748b", fontWeight: "500" }}>
            Live Preview — {businessData.businessName}
          </span>
        </div>
        <iframe
          srcDoc={generateHTML()}
          style={{ width: "100%", height: "700px", border: "none" }}
          title="Website Preview"
          sandbox=""
        />
      </div>
    </div>
  );
};

export default WebsitePreview;
