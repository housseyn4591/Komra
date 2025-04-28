import React from "react";

function Header() {
  return (
    <div style={{ backgroundColor: "#ff4d4d", color: "#fff", padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1>قمرة - إدارة الإنتاج السمعي والبصري</h1>
      <div style={{ display: "flex", gap: "15px" }}>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}>
          🟢 واتساب
        </a>
        <a href="/login" style={{ color: "#fff", textDecoration: "none" }}>
          🚪 خروج
        </a>
      </div>
    </div>
  );
}

export default Header;