import { Routes, Route, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

import ThemeContext from "./context/ThemeContext";

import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Single from "./pages/Single/Single";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [theme, setTheme] = useState("light");

  const [searchParams, setSearchParams] = useSearchParams();

  const toggleTheme = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  theme === "light" && document.body.classList.remove("dark");
  theme === "dark" && document.body.classList.add("dark");

  const API = "https://restcountries.com/v3.1/";

  useEffect(() => {
    setIsLoading(true);
    localStorage.getItem("theme") === "dark" && setTheme("dark");
    Axios.get(API + "all").then((res) => {
      setIsLoading(false);
      setAllCountries(res.data);
      setCountries(res.data);
    });
  }, []);

  useEffect(() => {
    if (searchParams.get("search")) {
      setIsLoading(true);
      setCurrentPage(1);
      const search = searchParams.get("search");
      Axios.get(API + "/name/" + search).then((res) => {
        setIsLoading(false);
        setCountries(res.data);
      });
    }
  }, [searchParams]);

  useEffect(() => {
    setCurrentPage(1);
    if (region === "all") {
      setCountries(allCountries);
    } else {
      const filteredCountries = allCountries.filter((country) => {
        return country.region.toLowerCase().includes(region.toLowerCase());
      });
      setCountries(filteredCountries);
    }
  }, [region]);

  const MainRoute = (
    <Main
      search={search}
      region={region}
      setRegion={setRegion}
      countries={countries}
      isLoading={isLoading}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Header />
      <Routes>
        <Route index path="/" element={MainRoute} />
        <Route path="/country/:country" element={<Single />} />
        <Route path="*" element={MainRoute} />
      </Routes>
    </ThemeContext.Provider>
  );
};

export default App;
