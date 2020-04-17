import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class Login extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            password:'',
        }
    }

    login(){
        // console.log(this.state);
        fetch("http://localhost:3000/login?q=" + this.state.name)
            .then((data) => {
            data.json().then((result) => {
              console.log(result);
              if(result.length>0){
                  localStorage.setItem('login',JSON.stringify(result));
                console.log(this.props.history.push('list'));
              }
              else
              {
                  alert("please, check username and password")
              }
            });
          });
    }
    render() {
        return (
            <div>
                <h1>Login </h1>
                <input name="user" type="text" onChange={e => this.setState({name:e.target.value})} 
                placeholder="Enter username"/> <br/> <br/>
                <input name="password" type="password" onChange={e => this.setState({password:e.target.value})}
                placeholder="Enter password"/> <br/> <br/>
                <Button onClick={() => {this.login()}}>Login</Button>
            </div>
        )
    }
}
