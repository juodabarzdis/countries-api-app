import React from "react";
import "./Header.css";
import { BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>Where in the world?</h1>
          </Link>
        </div>
        <div>
          <button className="btn">
            <BsMoon />
            Dark Mode
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
