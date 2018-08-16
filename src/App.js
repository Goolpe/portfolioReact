import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AboutProject from './components/AboutProject';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      aboutP : false,
      homeP : true
    }
  }
  render() {
    return (
      <Router>
      <div>
        <header className="header_works">
          <div className="header__wrapper">
            <Navigation />
          </div>
        </header>
        <section id="content">
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/about-project" component={AboutProject} />
        </section>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
