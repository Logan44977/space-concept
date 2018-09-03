import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import PlanetText from './PlanetText';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <PlanetText/>
      </div>
    );
  }
}

export default App;
