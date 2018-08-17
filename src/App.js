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
import ShopPage from './components/ShopPage';
import StreamsPage from './components/StreamsPage';

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
          <Route path="/shop" component={ShopPage} />
          <Route path="/streams" component={StreamsPage} />
        </section>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
