import React, { useEffect, useState } from "react";
import "./Main.css";
import Axios from "axios";

import Card from "../../components/Card/Card";
import Pager from "../../components/Pagination/Pager";
import Search from "../../components/Search/Search";
import { Link } from "react-router-dom";

const Main = (props) => {
  const [countries, setCountries] = useState([]);
  const { search, region, setSearch, setRegion } = props;
  const [isLoading, setIsLoading] = useState(false);

  const API = "https://restcountries.com/v3.1/";

  useEffect(() => {
    setIsLoading(true);
    let query = "all";
    if (search) {
      query = `name/${search}`;
    } else if (region && region !== "all") {
      query = `region/${region}`;
    } else if (region === "all") {
      query = "all";
    }
    Axios.get(API + query).then((res) => {
      setIsLoading(false);
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
          <Search search={search} setSearch={setSearch} setRegion={setRegion} />
          {isLoading && <div class="loader"></div>}
          <ul>
            {currentPosts.map((country) => {
              return (
                <Link
                  to={`/country/${country.name.common}`}
                  state={{ country: country }}
                  className="card-link"
                >
                  <Card country={country} key={country.cca3} />
                </Link>
              );
            })}
          </ul>
        </div>
        {currentPosts.length >= 1 && (
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
