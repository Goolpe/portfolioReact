import React, { Component } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="header_works">
          <div className="header__wrapper">
            <Navigation />
            <Header name="arthur" />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
