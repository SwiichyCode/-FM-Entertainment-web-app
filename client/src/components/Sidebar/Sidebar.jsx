import React from "react";
import SidebarLogo from "./SidebarLogo/SidebarLogo";
import SidebarNav from "./SidebarNav/SidebarNav";
import SidebarUser from "./SidebarUser/SibebarUser";
import { SidebarWrapper } from "./Sidebar.style";

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <div className="sidebar-top">
        <SidebarLogo />
        <SidebarNav />
      </div>
      <div className="sidebar-bot">
        <SidebarUser />
      </div>
    </SidebarWrapper>
  );
}
