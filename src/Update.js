// Update.jsx

import React, { useState } from "react";
import axios from "axios";
//import "./styles.css";

function Update() {
  const [student, setStudent] = useState({ id: "", name: "", present: false });
  const [msg, setMsg] = useState("");

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`https://studentattendance-backend-2.onrender.com/students/${student.id}`, student);
      setMsg(res.data.msg);
    } catch (err) {
      setMsg(err.response?.data?.msg || err.message);
    }
  };

  return (
    <div className="card">
      <h2>✏️ Update Student</h2>
      <input
        type="number"
        placeholder="Student ID"
        value={student.id}
        onChange={(e) => setStudent({ ...student, id: parseInt(e.target.value) })}
      />
      <input
        type="text"
        placeholder="New Name"
        value={student.name}
        onChange={(e) => setStudent({ ...student, name: e.target.value })}
      />
      <label>
        <input
          type="checkbox"
          checked={student.present}
          onChange={(e) => setStudent({ ...student, present: e.target.checked })}
        />{" "}
        Present
      </label>
      <button onClick={handleUpdate}>Update</button>
      {msg && <p>{msg}</p>}
    </div>
  );
}

export default Update;
