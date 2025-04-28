import React from "react";

function Projects() {
  return (
    <div>
      <h2>إدارة المشاريع</h2>
      <button style={{ marginBottom: "20px", padding: "10px", background: "#ff4d4d", color: "#fff", border: "none", borderRadius: "5px" }}>
        + إضافة مشروع جديد
      </button>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>اسم المشروع</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>تاريخ البدء</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>الحالة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>مشروع 1</td>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>2025-04-01</td>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>قيد التنفيذ</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Projects;