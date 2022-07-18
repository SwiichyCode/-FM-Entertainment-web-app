import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";
import Home from "../../pages/Home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
