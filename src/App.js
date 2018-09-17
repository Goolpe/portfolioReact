import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navigation/>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/works" component={Works} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
