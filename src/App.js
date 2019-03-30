import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table.js'
import Login from './forms/Login.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    token: ''
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {localStorage.getItem('token') === null
            ?
            <Login></Login>
            :
            <Route path="/tables/" component={Table} />
            }
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
