import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import CardGlobal from "../components/CardGlobal/CardGlobal";
import {
  filteredHome,
  filteredMovie,
  filedteredTvSeries,
} from "../utils/filter";

export default function CardListLayout({
  data,
  setData,
  inputText,
  filtered,
  title,
}) {
  let location = useLocation();
  const filteredData = data.filter((item) => {
    if (inputText === "") {
      return item;
    } else {
      return item.title.toLowerCase().includes(inputText);
    }
  });

  const filter = (item) => {
    if (location.pathname === "/") {
      return filteredHome(item);
    }
    if (location.pathname === "/movies") {
      return filteredMovie(item);
    }
    if (location.pathname === "/series") {
      return filedteredTvSeries(item);
    }
    if (location.pathname === "/bookmarked") {
      return filtered(item);
    }
  };

  return (
    <>
      {location.pathname === "/bookmarked" ? (
        <h2 className="title-list">
          {inputText.length
            ? `Found Disabled results for ‘${inputText}’`
            : title}
        </h2>
      ) : (
        <h2 className="title-list">
          {inputText.length
            ? `Found ${filteredData.length} results for ‘${inputText}’`
            : title}
        </h2>
      )}

      <CardListLayoutWrapper>
        {filteredData
          .filter((item) => filter(item))
          .map((item, index) => (
            <CardGlobal
              key={index}
              item={item}
              setFoundItems={setData}
              foundItems={data}
            />
          ))}
      </CardListLayoutWrapper>
    </>
  );
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
