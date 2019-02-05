import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import './Navigation.css';

class Navigation extends Component {

    scrollToTop = () => {
      scroll.scrollToTop();
    };
    
    render() {
        return (
          <div className="navbar" style={this.props.style}>
            <div className="logo">
              <p style={this.props.logo}><a onClick={this.scrollToTop} style={this.props.textColor}>EM</a></p>
            </div>
            
            <div className="navLink">
              <ul>
                <li><Link style={this.props.textColor} activeClass="active" to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link style={this.props.textColor} activeClass="active" to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
                <li><Link style={this.props.textColor} ctiveClass="active" to="skills" smooth={true}>Skills</Link></li>
                
              </ul>
            </div>
          </div>
        )
    }
}

export default Navigation;