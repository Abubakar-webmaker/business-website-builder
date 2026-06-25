const Navbar = () => {
  return (
    <nav style={{
      background: "white",
      borderBottom: "1px solid #e2e8f0",
      padding: "0 2rem",
      height: "64px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      zIndex: 100,
      boxShadow: "0 1px 8px rgba(0,0,0,0.06)"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{
          width: "36px", height: "36px",
          background: "linear-gradient(135deg, #6366f1, #06b6d4)",
          borderRadius: "10px",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "white", fontWeight: "700", fontSize: "16px"
        }}>B</div>
        <span style={{ fontWeight: "700", fontSize: "18px", color: "#0f172a" }}>
          BizSite <span style={{ color: "#6366f1" }}>Builder</span>
        </span>
      </div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <span style={{
          background: "#f0fdf4", color: "#16a34a",
          padding: "4px 12px", borderRadius: "20px",
          fontSize: "12px", fontWeight: "600",
          border: "1px solid #bbf7d0"
        }}>
          ✦ AI Powered
        </span>
      </div>
    </nav>
  );
};

export default Navbar;