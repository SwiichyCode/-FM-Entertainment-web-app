import React from "react";
import { MdLocalMovies } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";
import { CardTextWrapper } from "./CardText.style";

export default function CardText({ item, titleSize }) {
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
    <CardTextWrapper titleSize={titleSize}>
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
    </CardTextWrapper>
  );
}
