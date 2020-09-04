import React, { Component } from "react";
import Auxiliary from "./components/hoc/Auxiliary";
import MainContainer from "./containers/MainContainer/MainContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Auxiliary>
        <MainContainer />
      </Auxiliary>
    );
  }
}

export default App;
