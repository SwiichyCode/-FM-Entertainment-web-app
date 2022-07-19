import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdLocalMovies } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";
import { BsBookmarkFill } from "react-icons/bs";

import { NavWrapper } from "./SidebarNav.style";
import { IconContext } from "react-icons/lib";

export default function Nav() {
  const items = [
    { icon: <MdDashboard />, route: "/" },
    { icon: <MdLocalMovies />, route: "/movies" },
    { icon: <TbDeviceTvOld />, route: "/series" },
    { icon: <BsBookmarkFill />, route: "/bookmarked" },
  ];

  return (
    <NavWrapper>
      {items.map(({ icon, route }, index) => (
        <li key={index}>
          <IconContext.Provider value={{ className: "nav-icon" }}>
            <NavLink
              to={route}
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              {icon}
            </NavLink>
          </IconContext.Provider>
        </li>
      ))}
    </NavWrapper>
  );
}
