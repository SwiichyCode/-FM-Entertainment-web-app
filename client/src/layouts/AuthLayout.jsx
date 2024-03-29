import React from "react";
import styled from "styled-components";

export default function AuthLayout({ children }) {
  return <AuthLayoutWrapper>{children}</AuthLayoutWrapper>;
}

const AuthLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #10141e;
`;
