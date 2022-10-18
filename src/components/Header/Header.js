import React from "react";
import "./Header.css";
import { BsMoon } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <h1>Where in the world?</h1>
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
