import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SearchBarWrapper } from "./SearchBar.style";
import IconSearch from "../../assets/icon-search.svg";

export default function SearchBar({ search, setSearch }) {
  const [placeholder, setPlaceholder] = useState("");
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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={placeholder}
        />
        <div className="input-border"></div>
      </div>
    </SearchBarWrapper>
  );
}
