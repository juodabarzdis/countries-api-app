import React, { useEffect, useState } from "react";
import "./Main.css";
import Axios from "axios";
import usePrevious from "./hooks/usePrevious";

import Card from "../../components/Card/Card";

const Main = (props) => {
  const [countries, setCountries] = useState([]);
  const { search, region, setSearch, setRegion } = props;

  const prevRegion = usePrevious(region);

  const API = "https://restcountries.com/v3.1/";

  useEffect(() => {
    let query = "all";
    if (search) {
      query = `name/${search}`;
    } else if (region && region !== "all") {
      query = `region/${region}`;
    } else if (region === "all") {
      query = "all";
    }
    Axios.get(API + query).then((res) => {
      setCountries(res.data);
    });
  }, [search, region]);

  // useEffect(() => {
  //   Axios.get(API + "/name/" + search)
  //     .then((res) => {
  //       setCountries(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [search !== ""]);

  return (
    <main>
      <div className="main-container">
        <ul>
          {countries.map((country) => {
            return <Card country={country} key={country.cca3} />;
          })}
        </ul>
      </div>
    </main>
  );
};

export default Main;
