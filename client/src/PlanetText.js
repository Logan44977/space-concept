import React, { Component } from 'react';
import './PlanetText.css';
 
let planets = ["MERCURY", "VENUS", "EARTH", "MARS", "JUPITER", "SATURN", "URANUS", "NEPTUNE"];

class PlanetText extends Component{
    
    constructor(props){
        super(props);
        this.state = {seconds: 0, planet: 'MERCURY'};
    }

    tick(){
        if(this.state.seconds < 20){
            let rng = Math.floor(Math.random() * planets.length);

            this.setState(prevState => ({
                seconds: prevState.seconds + 1,
                planet: planets[rng]
            }));
        }
        else{
            clearInterval(this.interval);
            this.setState({
                planet: 'EARTH'
            });
        }
    }

    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 150);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }


   render(){
       return(
           <div className="planetText"> 
               <p className="planetText-p-planet">{this.state.planet}</p>
           </div>
       );
   }
}
 
export default PlanetText;