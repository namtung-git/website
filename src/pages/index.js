import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";

class HomeIndex extends Component {
render() {
  return (
    <div>
      <HashRouter>
        <div>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
        </div>
      </HashRouter>
    </div>
    );
  }
}
export default HomeIndex;