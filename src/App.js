import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import logo from "./logo.svg";
import "./App.css";
import * as Actions from "../src/redux/actions/actions";

import Button from "./components/pure-components/Button";
import Textbox from "./components/pure-components/Textbox";

class App extends Component {
  handleOnClick = event => {
    this.props.actions.search(event);
  };

  handleOnChange = (event, name) => {
    this.props.actions.textboxOnChange(event, name);
  };

  render() {
    const { searchField } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <Textbox
            value={searchField}
            onChange={this.handleOnChange}
            name={"searchField"}
          />
          <Button onClick={this.handleOnClick} value={"add song"} />
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, Actions), dispatch)
});

const mapStateToProps = state => {
  return {
    searchField: state.Search.searchField
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
