import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SearchBarWrapper } from "./SearchBar.style";
import IconSearch from "../../assets/icon-search.svg";

export default function SearchBar({ title, setFoundItems, setTitle, data }) {
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

  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = data.filter((item) => {
        return item.title.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundItems(results);
    } else {
      setFoundItems(data);

      // If the text field is empty, show all users
    }
    setTitle(keyword);
  };

  return (
    <SearchBarWrapper>
      <img src={IconSearch} alt="icon-search" />
      <div className="content-input">
        <input
          type="text"
          value={title}
          onChange={filter}
          placeholder={placeholder}
        />
        <div className="input-border"></div>
      </div>
    </SearchBarWrapper>
  );
}
