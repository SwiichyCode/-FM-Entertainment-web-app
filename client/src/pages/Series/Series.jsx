import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { SeriesWrapper } from "./Series.style";
import { ListWrapper } from "../Home/Home.style";

import CardListLayout from "../../layouts/CardListLayout";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function Series() {
  const [data, setData] = useOutletContext();
  const [inputText, setInputText] = useState("");

  return (
    <SeriesWrapper>
      <SearchBar setInputText={setInputText} data={data} />
      <ListWrapper>
        <CardListLayout
          data={data}
          setData={setData}
          inputText={inputText}
          title={"TV Series"}
        />
      </ListWrapper>
    </SeriesWrapper>
  );
}
