import React from "react";
import { MdLocalMovies } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

import { TrendingCardWrapper } from "./TrendingCard.style";
import PlayBtn from "../PlayBtn/PlayBtn";

export default function TrendingCard({ item }) {
  const displayIconbyCategory = (category) => {
    let icon;
    switch (category) {
      case "Movie":
        icon = <MdLocalMovies />;
        break;
      case "TV Series":
        icon = <TbDeviceTvOld />;
        break;
      default:
    }

    return icon;
  };

  return (
    <TrendingCardWrapper
      style={{
        backgroundImage: `url(${item.thumbnail.trending.large})`,
      }}
    >
      <div className="trendingCard-data">
        <ul className="trendingCard-list">
          <li className="item">{item.year}</li>
          <li className="dot"></li>
          <li className="item category">
            {displayIconbyCategory(item.category)} {item.category}
          </li>
          <li className="dot"></li>
          <li className="item rating">{item.rating}</li>
        </ul>
        <h2>{item.title}</h2>
      </div>
      <div className="trendingCard-bookmarked">
        <IconContext.Provider value={{ className: "bookmark-icon" }}>
          {item.isBookmarked ? <BsBookmarkFill /> : <BsBookmark />}
        </IconContext.Provider>
      </div>
      <PlayBtn />
    </TrendingCardWrapper>
  );
}
