import React from "react";
import "./Header.css";
import { BsMoon } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleHome = (e) => {
    navigate("/");
    window.location.reload();
  };

  return (
    <header className={theme}>
      <div className="header-container">
        <div className="logo">
          <Link onClick={handleHome}>
            <h1>Where in the world?</h1>
          </Link>
        </div>
        <div>
          <button className={`btn ${theme}`} onClick={toggleTheme}>
            <BsMoon />
            Dark Mode
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
