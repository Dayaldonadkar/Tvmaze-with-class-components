import React, { Component } from "react";

export default class Movies extends Component {
  render() {
    let { title, description, img } = this.props;
    return (
      <div className="">
        <div className="">
          <div>
            <img src={img} />
            <h1>{title}</h1>
            <h1>{description}</h1>
          </div>
        </div>
      </div>
    );
  }
}
