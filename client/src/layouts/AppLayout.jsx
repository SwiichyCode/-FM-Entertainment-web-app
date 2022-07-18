import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/series">Series</Link>
        </li>
        <li>
          <Link to="/bookmarked">Bookmarked</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
