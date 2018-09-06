import React, { Component } from 'react'
import './About.css';

import profilePic from './img/profile_pic.jpg';

class About extends Component {
    render() {
        return( 
            <div className="about" id="about">
                <h1>About</h1>
                <div className="content">
                    <img src={profilePic} alt="profile picture" />
                    <p>
                        After initially purusing a math degree at University of Washington, I realized that
                        math was not something I want to do for a career. However, I've always enjoyed the 
                        problem solving and logical thinking aspect of math. This led me to change my major to 
                        Informatics, with a focus in Human Computer Interaction. 
                        <br />
                        <br/ >
                        Since then, I have been working towards to becoming a web and mobile developer, where I 
                        am able to apply my problem solving skills, gained from taking numerous math courses, to 
                        developing applications that are more user-centered and solves various type of problems. 
                        <br />
                        
                        
                    </p>
                </div>
            </div>
        )
    }
}

export default About;