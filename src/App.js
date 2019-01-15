import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "./logo.svg";
import "./App.css";
import { mockAction } from "../src/redux/actions/actions";

class App extends Component {
  handleOnClick = event => {
    this.props.actions.mockAction(event);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Hello World</p>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  mockAction: () => dispatch(mockAction())
});

const mapStateToProps = state => ({
  ...state
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
