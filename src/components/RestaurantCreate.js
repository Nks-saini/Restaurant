import React, { Component } from "react";
import NavbarMenu from './NavbarMenu'

export default class RestaurantCreate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      rating: null,
      address: null,
    };
  }


  create() {
    fetch("http://localhost:3000/restaurant", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => {
        alert("data created");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <NavbarMenu />
        <h1>RestaurantCreate</h1>
        <input
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
          placeholder="Restaurant name"
        />{" "}
        <br />
        <br />
        <input
          onChange={(event) => {
            this.setState({ email: event.target.value });
          }}
          placeholder="Restaurant Email"
        />{" "}
        <br />
        <br />
        <input
          onChange={(event) => {
            this.setState({ rating: event.target.value });
          }}
          placeholder="Restaurant Rating"
        />{" "}
        <br />
        <br />
        <input
          onChange={(event) => {
            this.setState({ address: event.target.value });
          }}
          placeholder="Restaurant Address"
        />{" "}
        <br />
        <br />
        <button
          onClick={() => {
            this.create();
          }}
        >
          Add Restaurant
        </button>
      </div>
    );
  }
}
