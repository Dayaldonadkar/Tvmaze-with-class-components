import React, { Component } from "react";

import Movies2 from "./Components1/Movies2";
import Navbar from "./Components1/Navbar";

export default class App extends Component {
  render() {
    return (
      <div className="">
        <Navbar />

        <Movies2 />
      </div>
    );
  }
}
