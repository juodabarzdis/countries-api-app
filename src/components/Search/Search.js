import React, { useRef } from "react";
import "./Search.css";
import { CiSearch } from "react-icons/ci";

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
    e.preventDefault();
    setSearch("");
    setRegion(e.target.value);
    inputRef.current.value = "";
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
        <select
          id="region-filter"
          name="region-filter"
          onChange={handleRegion}
          ref={optionRef}
        >
          <option value="all">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
