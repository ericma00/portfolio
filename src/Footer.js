import React, { Component } from 'react'
import './Footer.css';
import {Button} from 'react-bootstrap';

import github_w from './img/github_white.svg';
import github_b from './img/github_black.svg';
import linkedin from './img/linkedin.svg';
import instagram from './img/instagram.svg';
import email from './img/email_w.svg';

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

class Footer extends Component {
    constructor() {
        super();
        var contact = contactInfo;

        this.state = {
            contact: contact
        }
    }
    render() {
        return( 
            <div className="footer">
                <ul>
                    {contactInfo.map((item, i) => 
                        <li key={i}>
                            <a href={item.linkUrl} target="_blank" >
                                <img src={item.imgUrl} 
                                     alt={item.alt}
                                />
                            </a>
                        </li>
                    )}
                    <p>&copy;Eric Ma</p>
                </ul>
            </div>
        )
    }
}

export default Footer;