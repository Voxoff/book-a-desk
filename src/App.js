import React, { Component } from "react";
import flatiron from "./flatiron.png";
import "./App.scss";
import Calendar from 'react-calendar'
import TableList from "./components/TableList.js";
import Buttons from "./components/Buttons.js";
import Login from "./forms/Login.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    token: "",
    date: "",
    time: ''
  };

  updateToken = token => {
    this.setState({ token });
  };

  updateDate = date => {
    this.setState({date})
  }

  updateTime = event => {
    this.setState({ time: event.target.textContent.toLowerCase()})
  }

  readTimeAndDate = () => {
    return {time: this.state.time, date: this.state.date}
  }

  render() {
    return (
      <Router>
        <div className="App">
            <div className="body">
              <img src={flatiron} className="App-logo" alt="logo" />
              {/* <iframe
                className="google-calendar"
                src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=guybjoness%40googlemail.com&amp;color=%2329527A&amp;ctz=Europe%2FLondon"
                width="800"
                height="600"
                frameborder="0"
                scrolling="no"
              /> */}
              <div className="table-group">
                <h1> Book a desk!</h1>
                {!localStorage.getItem("token") ? (
                  <Login updateToken={this.updateToken} />
                  ) : (
                    <div>
                  <Calendar classNAME="calendar" onChange={this.updateDate}/>
                  <Buttons updateTime={this.updateTime} />
                    <Route path="/tables/" component={() => <TableList date={this.state.date} time={this.state.time} readTimeAndDate={this.readTimeAndDate}/>} />
                  </div>
                )}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
