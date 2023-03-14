import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import ClassA from "../classes/ClassA";

export default function Katzir() {
  return (
    <div>
      <Link to="/katzirFirstgrade">first grade class</Link>

      <Routes>
        <Route path="/katzirFirstgrade" element={<ClassA />} />
      </Routes>
    </div>
  );
}
