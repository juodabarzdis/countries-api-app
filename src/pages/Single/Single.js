import React from "react";
import { useLocation } from "react-router-dom";
import "./Single.css";
import { BsArrowLeft } from "react-icons/bs";

const Single = () => {
  const location = useLocation();
  const country = location;

  const currency = Object.keys(location.state.country.currencies);

  const languages = Object.keys(location.state.country.languages);

  return (
    <>
      <div className="country-wrapper">
        <div className="country-container">
          <div className="button-container">
            <button className="back-btn">
              <BsArrowLeft />
              Back
            </button>
          </div>
          <div className="country">
            <div className="country-image-wrapper">
              <div className="country-image">
                <img src={country.state.country.flags.svg} alt="" />
              </div>
            </div>

            <div className="country-content">
              <div className="country-content-wrapper">
                <h2>{country.state.country.name.common}</h2>
                <div className="country-content-columns">
                  <div className="country-content-info-left">
                    <p>
                      <span>Native Name: </span>
                      {country.state.country.name.nativeName.common}
                    </p>
                    <p>
                      <span>Population: </span>
                      {country.state.country.population}
                    </p>
                    <p>
                      <span>Region: </span>
                      {country.state.country.region}
                    </p>
                    <p>
                      <span>Sub Region: </span>
                      {country.state.country.subregion}
                    </p>
                    <p>
                      <span>Capital: </span>
                      {country.state.country.capital}
                    </p>
                  </div>
                  <div className="country-content-info-right">
                    <p>
                      <span>Top Level Domain: </span>
                      {country.state.country.tld}
                    </p>
                    <p>
                      <span>Currencies: </span>
                      {currency.map((curr, index) => {
                        index ? (curr = ", " + curr) : (curr = curr);
                        return (
                          <span className="light" key={curr}>
                            {curr}
                          </span>
                        );
                      })}
                    </p>
                    <p>
                      <span>Languages: </span>
                      {languages.map((lang, index) => {
                        index ? (lang = ", " + lang) : (lang = lang);
                        return (
                          <span className="light" key={lang}>
                            {lang}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;
