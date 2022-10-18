import React, { useRef } from "react";
import "./Search.css";
import { CiSearch } from "react-icons/ci";
import Select from "react-select";

const Search = (props) => {
  const inputRef = useRef();
  const optionRef = useRef();
  const { setSearch, setRegion } = props;

  const handleSearch = (e) => {
    e.preventDefault();
    setRegion("");
    setSearch(inputRef.current.value);
    optionRef.current.value = "all";
  };

  const handleRegion = (e) => {
    setSearch("");
    setRegion(e.value);
  };

  const options = [
    { value: "all", label: "All" },
    { value: "africa", label: "Africa" },
    { value: "americas", label: "Americas" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];

  const customStyles = {
    control: (styles) => ({
      ...styles,
      width: "200px",
      height: "50px",
      border: "none",
      borderRadius: "5px",
      boxShadow: " 0px 2px 2px 0px rgba(0, 0, 0, 0.1);",
      cursor: "pointer",
    }),
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch} className="search">
        <button className="search-icon">
          <CiSearch />
        </button>
        <div>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for a country..."
          />
        </div>
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
  );
};

export default Search;
