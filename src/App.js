import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Movies2 from "./Components1/Movies2";
import Navbar from "./Components1/Navbar";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Movies2 genre="all" key="all" />} />
          <Route
            exact
            path="/hollywood"
            element={<Movies2 genre="hollywood" key="hollywood" />}
          />

          <Route
            exact
            path="/anime"
            element={<Movies2 genre="anime" key="anime" />}
          />
          <Route
            exact
            path="/Bollywood"
            element={<Movies2 genre="bollywood" key="bollywood" />}
          />

          <Route
            exact
            path="/funny"
            element={<Movies2 genre="funnt" key="funny" />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
