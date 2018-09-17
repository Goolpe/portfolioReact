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
import Work from './components/Work';
import Navigation from './components/Navigation';
import error404Page from './components/error404page';

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
            <Route path="/work/:id" component={Work} />
            <Route path="/*" component={error404Page} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
