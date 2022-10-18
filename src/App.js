import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Search from "./components/Search/Search";

const App = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  return (
    <BrowserRouter>
      <Header />
      <Search search={search} setSearch={setSearch} setRegion={setRegion} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              search={search}
              region={region}
              setSearch={setSearch}
              setRegion={setRegion}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
