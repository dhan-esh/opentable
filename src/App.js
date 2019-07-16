import React, { Component } from "react";
import './App.css';
import HomePage from "./home/components/layout/HomePage";

import { Provider } from "react-redux";
import store from "./redux/Store";



class App extends Component {
  render() {
  return (
    <Provider store={store}>
      <div className="App">
        <HomePage />
      </div>
    </Provider>
  );
  }
}

export default App;
