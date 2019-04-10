import React, { Component } from "react";
import Table from './Table.js'

class TableList extends Component {
  state = {
    tables: []
  }
  async componentDidMount() {
    const data = await this.fetchData('https://book-a-desk-api.herokuapp.com/api/v1/tables');
    this.setState({tables: data.tables})
  }

  componentDidUpdate = async(prevProps) => {
    if (prevProps.time !== this.props.time || prevProps.date !== this.props.date){
      const data = await this.fetchData('https://book-a-desk-api.herokuapp.com/api/v1/tables');
      this.setState({ tables: data.tables })
    } else {
      console.log("updated already")
    }
  }

  fetchData = async(url) => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json"
    };
    const date = this.props.date && this.props.date.toDateString()
    return await fetch(url, {method: 'POST', headers, body: JSON.stringify({time: this.props.time, date})})
      .then(res => res.json())
  }

  render() {
    return (
      <div className="TableList">
        {this.state.tables.map((table, id) => (
          <Table table={table} key={table.name} id={id} readTimeAndDate={this.props.readTimeAndDate} updateFlash={this.props.updateFlash} />
        ))}
      </div>
    );
  }
}

export default TableList;
