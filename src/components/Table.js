import React, { Component } from "react";

class Table extends Component {
  handleClick = (event) => {
    const table_div = event.target
    const name = table_div.dataset.name
    let obj = this.props.readTimeAndDate()
    obj.name = name
    fetch("https://book-a-desk-api.herokuapp.com//api/v1/add_booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(obj)
    })
      .then(res => res.json())
      .then(data => {
        table_div.classList.add("booked-table");
      });
    this.props.updateFlash();
  }
  render() {
    return (
      <div
        className={`Table ${this.props.table.active ? 'booked-table' : ''}`}
        data-name={this.props.table.name}
        onClick={this.handleClick}
        id={`Table-${this.props.id}`}
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
