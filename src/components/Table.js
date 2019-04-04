import React, { Component } from "react";

class Table extends Component {
  handleClick = (event) => {
    const table_div = event.target
    const name = table_div.dataset.name
    let obj = this.props.readTimeAndDate()
    obj.name = name
    fetch("http://localhost:3000/api/v1/add_booking", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(obj)
    }).then(res => res.json()).then(d => {
      table_div.remove()
    })

  }
  render() {
    return (
      <div
        className="Table"
        data-name={this.props.table.name}
        onClick={this.handleClick}
      >
        <p>{this.props.table.name}</p>
        <div className="stage">
          <div className="table" />
          <div className="paper-block" />
          <div className="mug">
            <div className="black-tea" />
          </div>
          <div className="computer">
            <div className="screen">
              <div className="website" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
