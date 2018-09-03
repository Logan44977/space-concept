import React, { Component } from 'react';
import './App.css';
import Swipe from 'react-easy-swipe';

import Header from './Header';
import PlanetText from './PlanetText';
import Astronaut from './Astronaut';
import PlanetSlider from './PlanetSlider';

class App extends Component {

  swipeRight(){
    console.log('swipe right');
  }

  swipeLeft(){
    console.log('swipe left');
  }


  render() {
    return (
      <div className="app">
        <Swipe
          className="app-swipe"
          onSwipeRight={this.swipeRight}
          onSwipeLeft={this.swipeLeft}>

          <Header/>
          <PlanetText/>
          <Astronaut/>
          <PlanetSlider/>

        </Swipe>
      </div>
    );
  }
}

export default App;
