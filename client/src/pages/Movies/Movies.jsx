import React from "react";
import { useOutletContext } from "react-router-dom";
import { MoviesWrapper } from "./Movies.style";
import { ListWrapper } from "../Home/Home.style";
import CardGlobal from "../../components/CardGlobal/CardGlobal";
import CardListLayout from "../../layouts/CardListLayout";

export default function Movies() {
  const [foundItems, , title, , data] = useOutletContext();

  const foundItemsFiltered = foundItems.filter(
    (item) => item.category === "Movie"
  );

  return (
    <MoviesWrapper>
      <ListWrapper>
        <h2 className="title-list">
          {title.length
            ? `Found ${foundItemsFiltered.length} results for ‘${title}’`
            : "Movies"}
        </h2>
        <CardListLayout>
          {foundItems && foundItems.length > 0
            ? foundItems
                .filter((item) => item.category === "Movie")
                .map((item, index) => <CardGlobal key={index} item={item} />)
            : data
                .filter((item) => item.category === "Movie")
                .map((item, index) => <CardGlobal key={index} item={item} />)}
        </CardListLayout>
      </ListWrapper>
    </MoviesWrapper>
  );
}
