import React, { Component } from 'react'
import './Skills.css';

var web_dev = ['Java', 'React-Native', 'JavaScript', 'HTML & CSS', 'ES6',
              'Node.js', 'React.js', 'JQuery', 'Git & Github', 
              'Bash', 'SQL'];

var ux = ['Adobe XD', 'Illustrator'];

var data_science = ['Python', 'R', 'D3.js', 'Tableau'];



class Skills extends Component {
    render() {
        return( 
            <div className="skills" id="skills">
                <h1>Skills</h1>
                <div className="web_dev">
                    <h2>Web/Mobile Development</h2>
                    <ul>
                        {web_dev.map((item, i) => 
                        <li key={i}>{item}</li>)}
                    </ul>
                </div>

                <div className="ux">
                    <h2>UX Design</h2>
                    <ul>
                        {ux.map((item, i) => 
                        <li key={i}>{item}</li>)}
                    </ul>
                </div>

                <div className="data_science">
                    <h2>Data Science</h2>
                    <ul>
                        {data_science.map((item, i) => 
                        <li key={i}>{item}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Skills;