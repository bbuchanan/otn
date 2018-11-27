import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

class App extends Component {
  load = () => {
    axios
      .get("https://query2.finance.yahoo.com/v7/finance/options/amd")
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.load}>Click me</button>
        </header>
      </div>
    );
  }
}

export default App;
