import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SearchBarWrapper } from "./SearchBar.style";
import IconSearch from "../../assets/icon-search.svg";

export default function SearchBar({ setInputText, title }) {
  const [placeholder, setPlaceholder] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  let location = useLocation("");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setPlaceholder("Search for movies or TV series");
        break;
      case "/movies":
        setPlaceholder("Search for movies");
        break;
      case "/series":
        setPlaceholder("Search for TV series");
        break;
      case "/bookmarked":
        setPlaceholder("Search for bookmarked shows");
        break;
      default:
    }
  }, [location]);

  return (
    <SearchBarWrapper>
      <img src={IconSearch} alt="icon-search" />
      <div className="content-input">
        <input
          type="text"
          value={title}
          onChange={inputHandler}
          placeholder={placeholder}
        />
        <div className="input-border"></div>
      </div>
    </SearchBarWrapper>
  );
}
