import React from "react";

function Tasks() {
  return (
    <div>
      <h2>إدارة المهام</h2>
      <button style={{ marginBottom: "20px", padding: "10px", background: "#ff4d4d", color: "#fff", border: "none", borderRadius: "5px" }}>
        + إضافة مهمة جديدة
      </button>
      <ul>
        <li>مهمة 1 - مكتملة ✅</li>
        <li>مهمة 2 - قيد التنفيذ ⏳</li>
        <li>مهمة 3 - لم تبدأ بعد ❌</li>
      </ul>
    </div>
  );
}

export default Tasks;