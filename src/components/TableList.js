import React, { Component } from "react";
import Table from './Table.js'

class TableList extends Component {
  state = {
    tables: []
  }
  async componentDidMount() {
    const data = await this.fetchData('http://localhost:3000/api/v1/tables');
    this.setState({tables: data.tables})
  }

  fetchData = async(url) => {
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
    return await fetch(url, {headers})
      .then(res => res.json())
  }

  render() {
    return (
      <div className="TableList">
        { this.state.tables.length && this.state.tables.map(table => <Table table={table} />) }
      </div>
    );
  }
}

export default TableList;
