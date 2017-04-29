import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import RenterLogin from './components/RenterLogin.js';
import ViewGrills from './components/ViewGrills.js';

export const backPort = 3000;

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={RenterLogin} />
          <Route path="/grills" component={ViewGrills} />
        </Switch>
      </Router>
    );
  }
}

export default App;
