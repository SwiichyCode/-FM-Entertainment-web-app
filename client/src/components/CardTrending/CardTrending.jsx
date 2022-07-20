import React from "react";

import { CardTrendingWrapper } from "./CardTrending.style";
import PlayBtn from "../PlayBtn/PlayBtn";
import BookmarkedBtn from "../BookmarkedBtn/BookmarkedBtn";
import CardText from "../CardText/CardText";

export default function CardTrending({ item }) {
  return (
    <CardTrendingWrapper
      style={{
        backgroundImage: `url(${item.thumbnail.trending.large})`,
      }}
    >
      <CardText item={item} />
      <BookmarkedBtn item={item} />
      <PlayBtn />
    </CardTrendingWrapper>
  );
}
