import React from "react";

import { CardTrendingWrapper } from "./CardTrending.style";
import PlayBtn from "../PlayBtn/PlayBtn";
import BookmarkedBtn from "../BookmarkedBtn/BookmarkedBtn";
import CardText from "../CardText/CardText";

export default function CardTrending({ item, foundItems, setFoundItems }) {
  const handleBookmarked = (title) => {
    setFoundItems(
      foundItems.map((item) => {
        if (item.title === title) {
          return { ...item, isBookmarked: !item.isBookmarked };
        }
        return item;
      })
    );
  };
  return (
    <CardTrendingWrapper
      style={{
        backgroundImage: `url(${item.thumbnail.trending.large})`,
      }}
    >
      <CardText item={item} />
      <BookmarkedBtn item={item} action={() => handleBookmarked(item.title)} />
      <PlayBtn />
    </CardTrendingWrapper>
  );
}
