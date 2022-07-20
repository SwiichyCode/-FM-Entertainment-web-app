import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "../components/SearchBar/SearchBar";

import Sidebar from "../components/Sidebar/Sidebar";

export default function AppLayout() {
  const [search, setSearch] = useState();

  return (
    <AppLayoutWrapper>
      <Sidebar />
      <MainWrapper>
        <SearchBar value={search} setSearch={setSearch} />
        <Outlet context={[search, setSearch]} />
      </MainWrapper>
    </AppLayoutWrapper>
  );
}

const AppLayoutWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background: #10141e;
`;

const MainWrapper = styled.main`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;
