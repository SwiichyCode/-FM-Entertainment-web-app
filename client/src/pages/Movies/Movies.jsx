import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { MoviesWrapper } from "./Movies.style";
import { ListWrapper } from "../Home/Home.style";
import SearchBar from "../../components/SearchBar/SearchBar";
import CardListLayout from "../../layouts/CardListLayout";

export default function Movies() {
  const [data, setData] = useOutletContext();
  const [inputText, setInputText] = useState("");

  return (
    <MoviesWrapper>
      <SearchBar setInputText={setInputText} data={data} />
      <ListWrapper>
        <CardListLayout
          data={data}
          setData={setData}
          inputText={inputText}
          title={"Movies"}
        />
      </ListWrapper>
    </MoviesWrapper>
  );
}
