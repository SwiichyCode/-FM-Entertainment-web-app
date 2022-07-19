import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "../components/Sidebar/Sidebar";

export default function AppLayout() {
  return (
    <AppLayoutWrapper>
      <Sidebar />
      <Outlet />
    </AppLayoutWrapper>
  );
}

const AppLayoutWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background: #10141e;
`;
