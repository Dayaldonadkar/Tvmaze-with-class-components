import React, { Component } from "react";
import { BrowserRouter, Router, Routes, Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className=" flex justify-center bg-blue-300 py-10">
          <div className="flex justify-between w-8/12">
            <Link to="">
              {" "}
              <h1>Tv Maze</h1>
            </Link>
            <div className="flex space-x-7">
              <h1>Home</h1>
              <h1>About</h1>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <ul className="flex w-8/12 justify-between">
            <Link to="/">
              <li>All</li>
            </Link>
            <Link to="hollywood">Hollywood</Link>
            <Link to="/anime">
              <li>Anime</li>
            </Link>
            <li>
              <Link to="/bollywood">Bollywood</Link>
            </li>
            <li>
              <Link to="/funny">Funny</Link>
            </li>
            <li>
              <Link to="/anime">Anime</Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
