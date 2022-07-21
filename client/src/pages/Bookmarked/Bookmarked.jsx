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

  const bookmarkedMovies = data.filter(
    (item) => item.isBookmarked && item.category === "Movie"
  );
  const bookmarkedSeries = data.filter(
    (item) => item.isBookmarked && item.category === "TV Series"
  );

  return (
    <BookmarkedWrapper>
      <SearchBar setInputText={setInputText} data={data} />
      <ListWrapper>
        {bookmarkedMovies.length ? (
          <CardListLayout
            data={data}
            setData={setData}
            inputText={inputText}
            filtered={filteredMovies}
            title={"Bookmarked Movies"}
          />
        ) : (
          <h2>"Bookmarked Movies is empty"</h2>
        )}
      </ListWrapper>
      <ListWrapper>
        {bookmarkedSeries.length ? (
          <CardListLayout
            data={data}
            setData={setData}
            inputText={inputText}
            filtered={filteredSeries}
            title={"Bookmarked TV Series"}
          />
        ) : (
          <h2>"Bookmarked TV Series is empty"</h2>
        )}
      </ListWrapper>
    </BookmarkedWrapper>
  );
}
