import React, { Component } from 'react';
import {PageHeader} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import './Home.css';
import github_w from './img/github_white.svg';
import github_b from './img/github_black.svg';
import linkedin from './img/linkedin.svg';
import instagram from './img/instagram.svg';
import email from './img/email_w.svg';

var contact = [
    github_w
]

var contactInfo = [
    {
        imgUrl: github_w,
        linkUrl: 'https://github.com/ericma00',
        alt: 'github logo'
    },
    {
        imgUrl: linkedin,
        linkUrl: 'https://www.linkedin.com/in/ericma000/',
        alt: 'linkedin logo'
    },
    {
        imgUrl: email,
        linkUrl: 'mailto:ericma000@gmail.com',
        alt: 'email logo'
    },
    {
        imgUrl: instagram,
        linkUrl: 'https://instagram.com/ericma000',
        alt: 'instagram logo'
    }
]

class Home extends Component {
    constructor(props) {
        super(props);
        var modContact = contactInfo;
        this.state = {
            github: modContact[0],
            linkedin: modContact[1],
            instagram: modContact[2]
        }

        console.log(this.state);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver(i) {
        if (i === 0) {
            this.setState({
                github: {
                    imgUrl: github_b
                }
            })
        } else if (i === 1) {

        } else {
            
        }
        console.log(this.state)
    }

    handleMouseOut() {
        this.setState({
            imgSrc: github_w
        })
    }

    render() {
        return( 
            <div className="home">
                <header className="header">
                    <h1>Hi! I'm Eric.</h1>
                    <h3>I am an aspiring web and mobile developer. 
                        I like solving problems and building technologies that makes an impact.</h3>
                </header>
                <ul className="contactInfo">
                    {contactInfo.map((item, i) => 
                        <li key={i}>
                            <a href={item.linkUrl} target="_blank" >
                                <img src={item.imgUrl} 
                                     alt={item.alt}
                                     onMouseEnter={() => this.handleMouseOver(i)}/>
                            </a>
                        </li>
                    )}   
                </ul>

            </div>
        )
    }
}

export default Home;