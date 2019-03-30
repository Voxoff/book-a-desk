import React, { Component } from "react";

class Login extends Component {
  state = {
    password: '',
    email: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const user = {password: this.state.password, email: this.state.email}
    fetch("http://localhost:3000/api/v1/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }).then(res => res.json()).then(data => {
        if(data.message === "Invalid username or password"){
          alert('nope')
        } else {
          localStorage.setItem('token', data.jwt)
          console.log('success');
        }
      })
    }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="Login">
        <form>
          <input
            type="text"
            id="email"
            name="email"
            onChange={event => this.handleChange(event)}
            value={this.state.email}
          />
          <input
            type="text"
            id="password"
            name="password"
            onChange={event => this.handleChange(event)}
            value={this.state.password}
          />
          <input onClick={(e) => this.handleSubmit(e)} type="button" />
        </form>
      </div>
    );
  }
}

export default Login;
