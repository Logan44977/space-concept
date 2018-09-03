import React, { Component } from 'react';
import './Header.css';
 
class Header extends Component{
   render(){
       return(
           <div className="header">
                <div className="header-left">
                    <img className="header-img-search" src="/img/header/search.svg" alt=""/>
                </div>
                <div className="header-center">
                    {/* eventually will contain a fancy logo but for now is basic text */}
                    <p className="header-p-logo">SPACE</p>
                </div>
                <div className="header-right">
                    <img className="header-img-dots" src="/img/header/menu.svg" alt=""/>
                </div>
           </div>
       );
   }
}
 
export default Header;