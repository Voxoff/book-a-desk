import React, { Component } from "react";

class Buttons extends Component {
  state = {
    tables: []
  }

  render() {
    return (
      <div className="Buttons">
        <button className="morning btn" onClick={this.props.updateTime}>
          Morning
        </button>
        <button className="afternoon btn" onClick={this.props.updateTime}>
          Afternoon
        </button>
      </div>
    );
  }
}

export default Buttons;
