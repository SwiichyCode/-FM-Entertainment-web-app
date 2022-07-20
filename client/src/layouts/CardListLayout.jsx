import React from "react";
import styled from "styled-components";

export default function CardListLayout({ children }) {
  return <CardListLayoutWrapper>{children}</CardListLayoutWrapper>;
}

const CardListLayoutWrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  grid-column-gap: 40px;
  grid-row-gap: 32px;
  margin-bottom: 40px;
`;
