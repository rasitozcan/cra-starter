import Table from "antd/lib/table";
import "antd/lib/table/style/css";

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  testMethod() {
    return "test";
  }
  render() {
    const dataSource = [
      {
        key: "1",
        name: "Mike",
        age: 32,
        address: "10 Downing Street"
      },
      {
        key: "2",
        name: "John",
        age: 42,
        address: "10 Downing Street"
      }
    ];

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address"
      }
    ];
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Reacts</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}
export default App;
