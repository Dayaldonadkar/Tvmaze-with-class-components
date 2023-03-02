import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className=" flex justify-center bg-blue-300 py-10">
        <div className="flex justify-between w-8/12">
          <h1>Tv Maze</h1>
          <div className="flex space-x-7">
            <h1>Home</h1>
            <h1>About</h1>
          </div>
        </div>
      </div>
    );
  }
}
