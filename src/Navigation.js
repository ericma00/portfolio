import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
          <div className="navbar" style={this.props.style}>
            <div className="logo">
              <p style={this.props.logo}><a href="#" style={this.props.textColor}>EM</a></p>
            </div>
            
            <div className="navLink">
              <ul>
                {/* <li><a style={this.props.textColor} href="#blog">Blog</a></li> */}
                <li><a style={this.props.textColor} href="#about">About</a></li>
                <li><a style={this.props.textColor} href="#portfolio">Portfolio</a></li>
                <li><a style={this.props.textColor} href="#skills">Skills</a></li>
                
                
                
              </ul>
            </div>
          </div>
        )
    }
}

export default Navigation;