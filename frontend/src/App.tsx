import React from "react";
import "./App.css";
import TopBanner from "./Header";
import MoviesList from "./Movies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Podcast from "./Podcast";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TopBanner />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/movies" element={<MoviesList />} />
        </Routes>
      </Router>
      {/* <TopBanner title="Home" />
      <MoviesList /> */}
    </div>
  );
}

export default App;
