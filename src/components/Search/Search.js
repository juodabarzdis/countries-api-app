import React, { useRef, useContext } from "react";
import "./Search.css";
import { CiSearch } from "react-icons/ci";
import Select from "react-select";
import ThemeContext from "../../context/ThemeContext";

const Search = (props) => {
  const inputRef = useRef();
  const optionRef = useRef();
  const { setSearch, setRegion } = props;
  const { theme } = useContext(ThemeContext);

  const options = [
    { value: "all", label: "All" },
    { value: "africa", label: "Africa" },
    { value: "americas", label: "Americas" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setRegion("");
    setSearch(inputRef.current.value);
  };

  const handleRegion = (e) => {
    setSearch("");
    inputRef.current.value = "";
    setRegion(e.value);
  };
  const customStyles = {
    control: (styles) => ({
      ...styles,
      width: "200px",
      height: "52px",
      border: "none",
      borderRadius: "5px",
      boxShadow: " 0px 2px 2px 0px rgba(0, 0, 0, 0.1);",
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: "16px",
      backgroundColor: theme === "light" ? "#fff" : "hsl(209, 23%, 22%)",
    }),

    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? "hsl(209, 23%, 22%)"
          : isFocused
          ? "hsl(0, 0%, 98%)"
          : "hsl(0, 0%, 100%)",

        cursor: isDisabled ? "not-allowed" : "default",
        ":active": {
          ...styles[":active"],
          backgroundColor:
            !isDisabled && (isSelected ? data.color : "hsl(0, 0%, 98%)"),
        },
      };
    },
    singleValue: (styles, { data }) => ({
      ...styles,
      color: theme === "light" ? "hsl(200, 15%, 8%)" : "#fff",
    }),
    placeholder: (styles) => ({
      ...styles,
      color: theme === "light" ? "hsl(200, 15%, 8%)" : "#fff",
    }),
  };

  return (
    <div className="search-bar">
      <div className="search-bar-container">
        <form onSubmit={handleSearch} className={`search-form ${theme}`}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for a country..."
          />
          <button type="submit">
            <CiSearch />
          </button>
        </form>
        <div className="filter">
          <label htmlFor="region-filter"></label>
          <Select
            styles={customStyles}
            className="select"
            ref={optionRef}
            options={options}
            onChange={handleRegion}
            placeholder="Filter by Region"
            isSearchable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
