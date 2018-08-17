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
import ArticlesPage from './components/ArticlesPage';
import ArticlePage from './components/ArticlesPage/ArticlePage';
import ShopPage from './components/ShopPage';
import StreamsPage from './components/StreamsPage';
import MastersPage from './components/MastersPage';
import MasterPage from './components/MastersPage/MasterPage';

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
        <Navigation />
        <section id="content">
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/about-project" component={AboutProject} />
          <Route path="/library" component={LibraryPage} />
          <Route path="/art" component={ArtPage} />
          <Route path="/articles" component={ArticlesPage} />
          <Route path="/article/:id" component={ArticlePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/streams" component={StreamsPage} />
          <Route path="/masters" component={MastersPage} />
          <Route path="/master/:id" component={MasterPage} />
        </section>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
