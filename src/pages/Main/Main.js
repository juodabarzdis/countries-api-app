import React, { useEffect, useState } from "react";
import "./Main.css";
import Axios from "axios";

import Card from "../../components/Card/Card";
import Pager from "../../components/Pagination/Pager";

const Main = (props) => {
  const [countries, setCountries] = useState([]);
  const { search, region, setSearch, setRegion } = props;

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

  // Pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = countries.slice(indexOfFirstPost, indexOfLastPost);

  const nPages = Math.ceil(countries.length / postsPerPage);

  return (
    <>
      <main>
        <div className="main-container">
          <ul>
            {currentPosts.map((country) => {
              return <Card country={country} key={country.cca3} />;
            })}
          </ul>
        </div>
        {currentPosts.length >= 12 && (
          <div className="pagination-container">
            <Pager
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </main>
    </>
  );
};

export default Main;
