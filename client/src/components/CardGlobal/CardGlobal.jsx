import React from "react";
import BookmarkedBtn from "../BookmarkedBtn/BookmarkedBtn";
import CardText from "../CardText/CardText";
import PlayBtn from "../PlayBtn/PlayBtn";
import { CardGlobalWrapper } from "./CardGlobal.style";

export default function CardGlobal({ item }) {
  return (
    <CardGlobalWrapper>
      <div className="content-img">
        <img className="img-global" src={item.thumbnail.regular.small} alt="" />
        <BookmarkedBtn item={item} />
        <PlayBtn />
      </div>
      <div className="content-text">
        <CardText item={item} titleSize={"18px"} />
      </div>
    </CardGlobalWrapper>
  );
}
