import React, { Component } from "react";
import "./App.css";
import { SymbolEntryComponent } from "./Components/SymbolEntry";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SymbolEntryComponent />
      </div>
    );
  }
}

export default App;
