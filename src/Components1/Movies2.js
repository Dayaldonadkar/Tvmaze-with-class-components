import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export default class Movies2 extends Component {
  static defaultProps = {
    genre: "all",
  };

  static propTypes = {
    genre: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: this.articles,

      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    console.log("I am console.log");
  }

  componentDidMount() {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${this.props.genre}`)
      .then((response) => this.setState({ articles: response.data }));
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div className="flex justify-center">
        <div className="md:w-8/12 flex flex-col justify-center items-center">
          <input
            className=" bg-white h-10 w-96 rounded-l-lg"
            type="text"
            placeholder="Search shows"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="grid lg:grid-cols-5 lg:gap-10 justify-center space-y-10">
            {this.state.articles
              ?.filter((ite) => {
                const { show, name, id } = ite;
                // console.log(show.genres.length);
                if (this.state.value === "") {
                  return ite;
                } else if (
                  show.name
                    .toLowerCase()
                    .includes(this.state.value.toLowerCase())
                ) {
                  return ite;
                }
              })
              .map((item) => {
                return (
                  <div key={item.id} className="">
                    <div>
                      <h1>{item.show?.name}</h1>

                      <h1>{item.show?.type}</h1>
                      <img src={item.show?.image?.medium} />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
