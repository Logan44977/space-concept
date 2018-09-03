import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import PlanetText from './PlanetText';
import Astronaut from './Astronaut';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <PlanetText/>
        <Astronaut/>
      </div>
    );
  }
}

export default App;
