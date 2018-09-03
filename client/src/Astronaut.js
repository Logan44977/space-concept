import React, { Component } from 'react';
import './Astronaut.css';
 
class Astronaut extends Component{
   render(){
       return(
            <div className="astronaut slide-in-bottom">
                <div className="astronaut-holder">
                    <div className="astronaut-background"></div>
                    <div className="astronaut-planet appear">
                        <img className="astronaut-img-planet" src="/img/planets/earth.png" alt=""/>
                        <div className="astronaut-planet-hidden"></div>
                    </div>
                    <img className="astronaut-img-helmet" src="/img/astronaut/naut1.png" alt=""/>
                </div>
            </div>
       );
   }
}
 
export default Astronaut;