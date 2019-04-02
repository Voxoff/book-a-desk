import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <div className="Table">
        <p>{this.props.table.name}</p>
        <div className="stage">
          <div className="table"></div>
          <div className="paper-block"></div>
          <div className="mug">
            <div className="black-tea"></div>
          </div>
          <div className="computer">
            <div className="screen">
              <div className="website"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
