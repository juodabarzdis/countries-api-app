import React, { useEffect, useState, useContext } from "react";
import "./Main.css";
import Axios from "axios";
import Card from "../../components/Card/Card";
import Pager from "../../components/Pagination/Pager";
import Search from "../../components/Search/Search";
import { Link, useNavigate, useParams } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";

const Main = (props) => {
  const [countries, setCountries] = useState([]);
  const { search, region, setSearch, setRegion } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const { page } = useParams();

  const { theme, toggleTheme } = useContext(ThemeContext);

  const API = "https://restcountries.com/v3.1/";

  useEffect(() => {
    setIsLoading(true);
    let query = "all";
    if (search) {
      query = `name/${search}`;
      page && navigate(`/page/1`);
    } else if (region && region !== "all") {
      query = `region/${region}`;
      page && navigate(`/page/1`);
    } else if (region === "all") {
      query = "all";
    }
    Axios.get(API + query).then((res) => {
      console.log(res.data);
      setIsLoading(false);
      setCountries(res.data);
    });
  }, [search, region]);

  console.log(theme);
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
          <Search search={search} setSearch={setSearch} setRegion={setRegion} />
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
        {currentPosts.length >= 1 && !isLoading && (
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
