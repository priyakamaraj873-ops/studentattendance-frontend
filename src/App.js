// App.js

import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Add from "./Add";
import Update from "./Update";
import Delete from "./Delete";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">🎓 Student Attendance Management</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/add">Add</Link>
        <Link to="/update">Update</Link>
        <Link to="/delete">Delete</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </div>
  );
}

export default App;
