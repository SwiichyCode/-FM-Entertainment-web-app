import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "../../layouts/AppLayout";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";
import Home from "../../pages/Home/Home";
import Movies from "../../pages/Movies/Movies";
import Series from "../../pages/Series/Series";
import Bookmarked from "../../pages/Bookmarked/Bookmarked";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
          <Route path="bookmarked" element={<Bookmarked />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
