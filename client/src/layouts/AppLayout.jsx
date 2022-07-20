import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "../components/SearchBar/SearchBar";
import useFetch from "use-http";
import Sidebar from "../components/Sidebar/Sidebar";

export default function AppLayout() {
  const options = {}; // these options accept all native `fetch` options
  const { data = [] } = useFetch("http://localhost:8080/movies", options, []);
  const [title, setTitle] = useState("");
  const [foundItems, setFoundItems] = useState(data);

  return (
    <AppLayoutWrapper foundItems={foundItems}>
      <Sidebar />
      <MainWrapper title={title}>
        <SearchBar
          value={title}
          setFoundItems={setFoundItems}
          setTitle={setTitle}
          data={data}
        />

        <Outlet context={[foundItems, setFoundItems, title, setTitle, data]} />
      </MainWrapper>
    </AppLayoutWrapper>
  );
}

const AppLayoutWrapper = styled.div`
  height: ${({ foundItems }) => (foundItems.length ? "100%" : "100%")};
  display: flex;
  background: #10141e;
`;

const MainWrapper = styled.main`
  width: 100%;
  height: ${({ title }) => (title.length > 0 ? "100vh" : "100%")};
  overflow-y: hidden;
  background: #10141e;
`;
