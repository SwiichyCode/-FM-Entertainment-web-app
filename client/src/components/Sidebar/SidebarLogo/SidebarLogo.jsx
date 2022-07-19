import React from "react";
import { SidebarLogoWrapper } from "./SidebarLogo.style";
import Logo from "../../../assets/logo.svg";

export default function SidebarLogo() {
  return <SidebarLogoWrapper src={Logo} alt="logo" />;
}
