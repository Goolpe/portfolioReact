import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import LibraryPage from './components/LibraryPage';
import ArtPage from './components/ArtPage';
import ArticlesPage from './components/ArticlesPage';
import ArticlePage from './components/ArticlesPage/ArticlePage';
import ShopPage from './components/ShopPage';
import StreamsPage from './components/StreamsPage';
import MastersPage from './components/MastersPage';
import MasterPage from './components/MastersPage/MasterPage';
import SupportPage from './components/SupportPage';

import './App.css';

class App extends Component {
  render() {  
    return (
      <Router>
      <div>
        <Navigation/> 

          <Route path="/" exact={true} component={HomePage} />
          <Route path="/about-project" component={AboutPage} />
          <Route path="/library" component={LibraryPage} />
          <Route path="/art" component={ArtPage} />
          <Route path="/articles" component={ArticlesPage} />
          <Route path="/article/:id" component={ArticlePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/streams" component={StreamsPage} />
          <Route path="/masters" component={MastersPage} />
          <Route path="/master/:id" component={MasterPage} />
          <Route path="/support" component={SupportPage} />

        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
