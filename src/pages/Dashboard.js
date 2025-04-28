import React from "react";

function Dashboard() {
  return (
    <div>
      <h2>لوحة التحكم</h2>
      <p>مرحبًا بكم في تطبيق قمرة لإدارة الإنتاج السمعي والبصري.</p>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div className="card">
          <h3>عدد المشاريع</h3>
          <p>12</p>
        </div>
        <div className="card">
          <h3>عدد المهام</h3>
          <p>45</p>
        </div>
        <div className="card">
          <h3>التواصل</h3>
          <p>10 رسائل جديدة</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;