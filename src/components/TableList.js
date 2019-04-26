import React, { Component } from "react";
import Table from './Table.js'
import API from '../API'

class TableList extends Component {
  state = {
    tables: []
  }
  async componentDidMount() {
    const data = await this.fetchData(API.tablesURL);
    this.setState({tables: data.tables})
  }

  componentDidUpdate = async(prevProps) => {
    if (prevProps.time !== this.props.time || prevProps.date !== this.props.date){
      const data = await this.fetchData(API.tablesURL);
      this.setState({ tables: data.tables })
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
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="TableList">
        {this.state.tables ?
        this.state.tables.map((table, id) => (
          <Table table={table} key={table.name} id={id} readTimeAndDate={this.props.readTimeAndDate} updateFlash={this.props.updateFlash} />
        ))
        :
        null
        }
      </div>
    );
  }
}

export default TableList;
