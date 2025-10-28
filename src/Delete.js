// Delete.jsx

import React, { useState } from "react";
import axios from "axios";
//import "./styles.css";

function Delete() {
  const [id, setId] = useState("");
  const [msg, setMsg] = useState("");

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`https://studentattendance-backend-2.onrender.com/students/${id}`);
      setMsg(res.data.msg);
    } catch (err) {
      setMsg(err.response?.data?.msg || err.message);
    }
  };

  return (
    <div className="card">
      <h2>🗑️ Delete Student</h2>
      <input
        type="number"
        placeholder="Student ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
      {msg && <p>{msg}</p>}
    </div>
  );
}

export default Delete;
