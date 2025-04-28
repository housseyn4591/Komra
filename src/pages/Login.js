import React from "react";

function Login() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f5f5f5" }}>
      <div style={{ width: "300px", padding: "20px", background: "#fff", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>تسجيل الدخول</h2>
        <form>
          <input type="text" placeholder="اسم المستخدم" style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ddd" }} />
          <input type="password" placeholder="كلمة المرور" style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ddd" }} />
          <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#ff4d4d", color: "#fff", border: "none", borderRadius: "5px" }}>
            تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;