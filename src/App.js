import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AboutProject from './components/AboutProject';
import LibraryPage from './components/LibraryPage';
import ArtPage from './components/ArtPage';
import NewsPage from './components/NewsPage';
import ArticlePage from './components/NewsPage/ArticlePage';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
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
          <Route path="/library" component={LibraryPage} />
          <Route path="/art" component={ArtPage} />
          <Route path="/news" component={NewsPage} />
         
        </section>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
