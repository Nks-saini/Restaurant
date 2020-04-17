import React, { Component } from "react";
import NavbarMenu from './NavbarMenu'

export default class RestaurantUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      rating: null,
      address: null,
      id: null,
    };
  }

  componentDidMount() {
    fetch(
      "http://localhost:3000/restaurant/" + this.props.match.params.id
    ).then((response) => {
      response.json().then((result) => {
        console.log(result);
        this.setState({
          name: result.name,
          email: result.email,
          rating: result.rating,
          address: result.address,
          id: result.id,
        });
      });
    });
  }

  update() {
    fetch("http://localhost:3000/restaurant/" + this.state.id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => {
        alert("data updated");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <NavbarMenu />

        <h1>RestaurantUpdate</h1>
        <input
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
          value={this.state.name}
          placeholder="Restaurant name"
        />{" "}
        <br />
        <br />
        <input
          onChange={(event) => {
            this.setState({ email: event.target.value });
          }}
          value={this.state.email}
          placeholder="Restaurant Email"
        />{" "}
        <br />
        <br />
        <input
          onChange={(event) => {
            this.setState({ rating: event.target.value });
          }}
          value={this.state.rating}
          placeholder="Restaurant Rating"
        />{" "}
        <br />
        <br />
        <input
          onChange={(event) => {
            this.setState({ address: event.target.value });
          }}
          value={this.state.address}
          placeholder="Restaurant Address"
        />{" "}
        <br />
        <br />
        <button
          onClick={() => {
            this.update();
          }}
        >
          Update Restaurant
        </button>
      </div>
    );
  }
}
