import React, { Component } from "react";

class Table extends Component {
  componentDidMount = () => {
    fetch("http://localhost:3000/api/v1/tables")
      .then(res => res.json())
      .then(data => console.log(data))
  }
  render() {
    console.log("table!")
    return (
      <div className="Table">

      </div>
    );
  }
}

export default Table;
