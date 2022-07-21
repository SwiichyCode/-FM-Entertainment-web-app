import React from "react";
import { IconContext } from "react-icons/lib";
import { BookmarkedBtnWrapper } from "./BookmarkedBtn.style";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";

export default function BookmarkedBtn({ item, action }) {
  return (
    <BookmarkedBtnWrapper onClick={action}>
      <IconContext.Provider value={{ className: "bookmark-icon" }}>
        {item.isBookmarked ? <BsBookmarkFill /> : <BsBookmark />}
      </IconContext.Provider>
    </BookmarkedBtnWrapper>
  );
}
