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
import TechWorksPage from './components/TechWorksPage';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      techs: true
    }
  }
  render() {  
    return (
      <Router>
      <div>
      {this.state.techs ? <Route path="/" exact={true} component={TechWorksPage} /> 
      :
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
        }
      </div>
      </Router>
    );
  }
}

export default App;
