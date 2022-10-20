import React, { useContext } from "react";
import "./Card.css";
import ThemeContext from "../../context/ThemeContext";

const Card = (props) => {
  const { country } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <li>
      <div className={`card ${theme}`}>
        <div className="card-image">
          <img src={country.flags.svg} alt="" />
        </div>
        <div className="card-content">
          <h2>{country.name.common}</h2>
          <p>
            <span>Population: </span>
            {country.population}
          </p>
          <p>
            <span>Region: </span>
            {country.region}
          </p>
          <p>
            <span>Capital: </span>
            {country.capital}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Card;
