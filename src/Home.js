// Home.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
//import "./styles.css";

function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("https://studentattendance-backend-2.onrender.com/students").then((res) => {
      setStudents(res.data);
    });
  }, []);

  return (
    <div className="card">
      <h2>📋 Student Attendance List</h2>
      {students.length ? (
        students.map((s) => (
          <div key={s.id} className={`student ${s.present ? "present" : "absent"}`}>
            <p>
              <b>ID:</b> {s.id} | <b>Name:</b> {s.name} |{" "}
              <b>Status:</b> {s.present ? "Present ✅" : "Absent ❌"}
            </p>
          </div>
        ))
      ) : (
        <p>No students found</p>
      )}
    </div>
  );
}

export default Home;
