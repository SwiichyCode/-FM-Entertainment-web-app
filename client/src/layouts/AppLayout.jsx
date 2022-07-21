import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { initialValue } from "../data/mock-movies";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Sidebar from "../components/Sidebar/Sidebar";

export default function AppLayout() {
  const [data, setData] = useLocalStorage("key", initialValue);

  return (
    <AppLayoutWrapper>
      <Sidebar />
      <MainWrapper>
        <Outlet context={[data, setData]} />
      </MainWrapper>
    </AppLayoutWrapper>
  );
}

const AppLayoutWrapper = styled.div`
  display: flex;
  background: #10141e;
`;

const MainWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  overflow-y: hidden;
  background: #10141e;
  padding-bottom: 1em;
`;
