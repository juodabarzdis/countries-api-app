import React from "react";
import "./Card.css";

const Card = (props) => {
  const { country } = props;

  return (
    <li>
      <div className="card">
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
