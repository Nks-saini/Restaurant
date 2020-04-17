import React, { Component } from "react";
import {Table} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit ,faTrash} from '@fortawesome/free-solid-svg-icons'
import {
    Link
  } from 'react-router-dom';
import NavbarMenu from './NavbarMenu'
  
export default class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }

  componentDidMount() {
    this.getData()
  }
  getData(){
    fetch("http://localhost:3000/restaurant")
    .then((response) => {
      response.json().then((result) => {
        this.setState({
          list: result,
        });
      });
    });
  }

  delete(id){
    fetch("http://localhost:3000/restaurant/"+id, {
      method: "DELETE",
    })
      .then((response) => {
        alert("data deleted");
            this.getData()
      })
      .catch((error) => {
        console.log(error);
      });

  }
  render() {
    return (
      <div>
        <NavbarMenu />
        <h1>RestaurantList</h1>
        {this.state.list ? (
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
              {this.state.list.map((item, i) => (
                 <tbody>
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
                 </tbody>
              ))}
            </Table>
          </div>
        ) : (
          <p>Please wait</p>
        )}
      </div>
    );
  }
}
