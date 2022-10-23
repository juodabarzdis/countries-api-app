import React, { useState, useContext } from "react";
import "./Main.css";
import Card from "../../components/Card/Card";
import Pager from "../../components/Pagination/Pager";
import Search from "../../components/Search/Search";
import { Link, useParams } from "react-router-dom";

const Main = (props) => {
  const {
    search,
    setSearch,
    setRegion,
    isLoading,
    countries,
    currentPage,
    setCurrentPage,
  } = props;

  // Pagination

  const [postsPerPage] = useState(12);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = countries.slice(indexOfFirstPost, indexOfLastPost);

  const nPages = Math.ceil(countries.length / postsPerPage);

  return (
    <>
      <main>
        <div className="main-container">
          <Search search={search} setRegion={setRegion} />
          {isLoading && <div className="loader"></div>}
          {!isLoading && (
            <ul>
              {currentPosts.map((country) => {
                return (
                  <Link
                    to={`/country/${country.name.common}`}
                    state={{ country: country }}
                    className="card-link"
                    key={country.cca3}
                  >
                    <Card country={country} />
                  </Link>
                );
              })}
            </ul>
          )}
        </div>
        {!isLoading && (
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
