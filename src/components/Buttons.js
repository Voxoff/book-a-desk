import React, { Component } from "react";

class Buttons extends Component {
  state = {
    tables: [],
    time: ''
  }

  handleClick = event => {
    this.setState({time: event.target.textContent.toLowerCase()})
  }

  render() {
    return (
      <div className="Buttons">
        <button className="morning btn" onClick={this.handleClick}>
          Morning
        </button>
        <button className="afternoon btn" onClick={this.handleClick}>
          Afternoon
        </button>
      </div>
    );
  }
}

export default Buttons;
