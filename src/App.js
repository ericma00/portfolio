import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './Navigation.js';
import Home from './Home.js';
import Skills from './Skills.js';
import Portfolio from './Portfolio.js';
import About from './About.js';
import Footer from './Footer.js';

class App extends Component {
  constructor() {
    super();
    var style = {
      background: 'red'
    }
    this.state={
      isTop: true,
      style: style,
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      if (window.scrollY >= 50) {
        console.log('woot');
        this.setState({
          navBackground: {
            background: '#ECECEC',
            opacity: 0.8
          },
          logoBorder: {
            border: '#999999 solid 2px',
          },
          textColor: {
            color: "#999999"
          }
        })
      } else {
        this.setState({
          navBackground: {background: '#90ccf4', opacity: 1},
          logoBorder: {
            border: 'white solid 2px',
          },
          textColor: {
            color: 'white'
          }
        })
      }
    })
  }

  render() {
    console.log('hi');
    return (
      <div className="App" id="container">
        <Navigation 
          style={this.state.navBackground}
          logo={this.state.logoBorder}
          textColor={this.state.textColor}/>
        <Home />
        <Skills  />
        <Portfolio />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
