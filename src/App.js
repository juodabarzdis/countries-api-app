import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext, useEffect } from "react";

import ThemeContext from "./context/ThemeContext";

import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Single from "./pages/Single/Single";

const App = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  theme === "light" && document.body.classList.remove("dark");
  theme === "dark" && document.body.classList.add("dark");

  const MainRoute = (
    <Main
      search={search}
      region={region}
      setSearch={setSearch}
      setRegion={setRegion}
    />
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={MainRoute} />
          <Route path="/page/:page" element={MainRoute} />
          <Route path="/country/:country" element={<Single />} />
          <Route path="*" element={MainRoute} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
