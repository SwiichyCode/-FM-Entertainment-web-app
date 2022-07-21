import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { BookmarkedWrapper } from "./Bookmarked.style";
import CardListLayout from "../../layouts/CardListLayout";
import { ListWrapper } from "../Home/Home.style";
import { filteredMovies, filteredSeries } from "../../utils/filter";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function Bookmarked() {
  const [data, setData] = useOutletContext();
  const [inputText, setInputText] = useState("");

  return (
    <BookmarkedWrapper>
      <SearchBar setInputText={setInputText} data={data} />
      <ListWrapper>
        <CardListLayout
          data={data}
          setData={setData}
          inputText={inputText}
          filtered={filteredMovies}
          title={"Bookmarked Movies"}
        />
      </ListWrapper>
      <ListWrapper>
        <CardListLayout
          data={data}
          setData={setData}
          inputText={inputText}
          filtered={filteredSeries}
          title={"Bookmarked TV Series"}
        />
      </ListWrapper>
    </BookmarkedWrapper>
  );
}
