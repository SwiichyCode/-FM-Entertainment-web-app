import React from "react";
import { useOutletContext } from "react-router-dom";
import Caroussel from "../../components/Caroussel/Caroussel";
import CardListLayout from "../../layouts/CardListLayout";
import { HomeWrapper, ListWrapper } from "./Home.style";
import CardGlobal from "../../components/CardGlobal/CardGlobal";

export default function Home() {
  const [foundItems, , title, , data] = useOutletContext();

  return (
    <HomeWrapper>
      {!title.length || !foundItems.length ? <Caroussel data={data} /> : null}
      <ListWrapper>
        <h2 className="title-list">
          {title.length
            ? `Found ${foundItems.length} results for ‘${title}’`
            : "Recommended for you"}
        </h2>
        <CardListLayout>
          {foundItems && foundItems.length > 0
            ? foundItems
                .filter((item) => !item.thumbnail.trending)
                .map((item, index) => <CardGlobal key={index} item={item} />)
            : data.map((item, index) => <CardGlobal key={index} item={item} />)}
        </CardListLayout>
      </ListWrapper>
    </HomeWrapper>
  );
}
