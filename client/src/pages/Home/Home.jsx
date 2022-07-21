import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Caroussel from "../../components/Caroussel/Caroussel";
import { HomeWrapper, ListWrapper } from "./Home.style";
import CardListLayout from "../../layouts/CardListLayout";
import SearchBar from "../../components/SearchBar/SearchBar";
export default function Home() {
  const [data, setData] = useOutletContext();
  const [inputText, setInputText] = useState("");

  return (
    <HomeWrapper>
      <SearchBar setInputText={setInputText} data={data} />
      <Caroussel data={data} />
      <ListWrapper>
        <CardListLayout
          data={data}
          setData={setData}
          inputText={inputText}
          title={"Recommended for you"}
        />
      </ListWrapper>
    </HomeWrapper>
  );
}
