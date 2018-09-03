import React, { Component } from 'react';
import './PlanetSlider.css';
 
class PlanetSlider extends Component{
   render(){
       return(
           <div className="planetslider planetslider-appear">
                <div className="planetslider-circle"></div>
                <div className="planetslider-planet-earth">
                    <div className="planetslider-planet-earth-moon moon-orbit-earth"/>
                </div>

                <div className="planetslider-holder-text">
                    <p className="planetslider-text-planet">EARTH</p>
                </div>

                <div className="planetslider-holder-arrows">
                    <img className="planetslider-arrow-right" alt="" src="/img/planetslider/arrow1.svg"/>
                    <img className="planetslider-arrow-left" alt="" src="/img/planetslider/arrow2.svg"/>
                </div>
           </div>
       );
   }
}
 
export default PlanetSlider;