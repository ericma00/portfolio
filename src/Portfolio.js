import React, { Component } from 'react'
import './Portfolio.css';
import Project from './Project.js';
import {Button, Modal} from 'react-bootstrap';
import SafistationModal from './SafistationModal.js';

import safistation from './img/safistation.PNG';
import phylogeneticTree from './img/phylogenetic_tree.PNG';
import massShooting from './img/mass_shooting.PNG';
import tic_tac_toe from './img/tic-tac-toe.PNG';

var project = [
    {
        name: 'Phylogenetic Tree Explorable',
        description: 'An interactive Visualization explorable that teaches users about the fundamentals of phylogenetic tree, a concept commonly taught in introductory biology courses. Build with JQuery and D3.js',
        demo: "https://ericma00.github.io/phylogeneticTree_explorable/",
        code: "https://github.com/ericma00/phylogeneticTree_explorable",
        img: phylogeneticTree
    },
    {
        name: 'Mass Shooting 2016',
        description: 'An interactive map of the mass shootings that occured in the US in 2016. Built with Leaflet.js, and vanilla JavaScript.',
        demo: "http://students.washington.edu/ericma00/info343/a3-mapping-ericma000/",
        code: "https://github.com/ericma00/mass_shooting",
        img: massShooting
    },
    {
        name: 'Tic-Tac-Toe',
        description: 'A game of tic-tac-toe that was implemented when I first started learning React.js.',
        demo: 'https://ericma00.github.io/tic-tac-toe/',
        code: 'https://github.com/ericma00/tic-tac-toe',
        img: tic_tac_toe
    }
];


class Portfolio extends Component {
    constructor(props, context) {
        super(props, context);
        var projects = project;
        
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            project: projects,
            show: false
        }

        console.log(this.state.project);
    }

    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return( 
            <div className="portfolio" id="portfolio">
                <h1>Portfolio</h1>
                <ul>
                    <li className="safistation">
                        <img src={safistation} />
                        <div className="description">
                            <h2>Chlorine Generator Dashboard</h2>
                            <p>A dashboard developed for a chlorine generator developed by the PATH and MSR, two global health organizations, to allow data transmission from the generator. Build with React.js, Redux, D3.js, and Python.</p>
                        </div>
                        <Button href="https://drive.google.com/file/d/1Fom6SwwL6vZHWj8oo7ZJ2_CP6031aT6w/view?usp=sharing" target="_blank">Wireframe</Button>
                        <Button onClick={this.handleShow}>
                            Code
                        </Button>
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Body>
                                <h4>Due to a signed Non Disclosure Agreenment with PATH, I am not allow to show the source code for this project. :(</h4>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.handleClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </li>
                    {
                        project.map((item, i) => 
                            <li key={i}>
                                <Project 
                                    title={item.name}
                                    description={item.description}
                                    img={item.img}
                                    demo={item.demo}
                                    code={item.code}
                                />    
                            </li>
                        )
                    }            
                </ul>
            </div>
        )
    }
}

export default Portfolio;