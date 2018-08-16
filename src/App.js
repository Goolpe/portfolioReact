import React, { Component } from 'react';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="header_works">
          <div className="header__wrapper">
            <Navigation />
          </div>
        </header>
        <HomePage />
        <Footer />
      </div>
    );
  }
}

export default App;
