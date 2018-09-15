import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navigation/>
          <Switch>
            <Route path="/" exact={true} component={HomePage} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
