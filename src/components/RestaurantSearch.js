import React, { Component } from "react";
import {Table, FormControl,Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit ,faTrash} from '@fortawesome/free-solid-svg-icons'
import {
    Link
  } from 'react-router-dom';
import NavbarMenu from './NavbarMenu'
  
export default class RestaurantSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null,
      noData: false,
      lastSearch:'',
    };
  }

  search(key) {
    // console.log(key);
    this.setState({lastSearch:key})
    fetch("http://localhost:3000/restaurant?q=" + key).then((data) => {
      data.json().then((result) => {
        console.log(result);
        if (result.length > 0) {
          this.setState({ searchData: result, noData: false });
        } else {
          this.setState({ noData: true, searchData: null });
        }
      });
    });
  }

  delete(id){
    fetch("http://localhost:3000/restaurant/"+id, {
      method: "DELETE",
    })
      .then((response) => {
        alert("data deleted");
            this.search(this.state.lastSearch)
      })
      .catch((error) => {
        console.log(error);
      });

  }
  render() {
    return (
      <Container>
        <NavbarMenu />

        <h1>RestaurantSearch</h1>
        <FormControl type="text" placeholder="Search Restaurant" onChange={(e) => this.search(e.target.value)} />
        {this.state.searchData ? (
          <div>
              <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>rating</th>
                  <th>Location</th>
                  <th>operation</th>
                </tr>
              </thead>
              <tbody>
                  
                    {this.state.searchData.map((item) => (
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.rating}</td>
                    <td>{item.address}</td>
                    <td>
                    <Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit} color="green"/></Link>
                        <span onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red"/></span>
                    </td>
                 </tr>
                    ))}
            </tbody>
            </Table>
          </div>
        ) : (
          ""
        )}
        {this.state.noData ? <h3>no data</h3> : null}
      </Container>
    );
  }
}
