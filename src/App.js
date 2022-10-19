import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Search from "./components/Search/Search";
import Single from "./pages/Single/Single";

const App = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  return (
    <BrowserRouter>
      <Header />
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
        <Route path="/country/:country" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
