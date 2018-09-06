import React, { Component } from 'react'
import './Project.css';
import {Button} from 'react-bootstrap';
class Project extends Component {
    render() {
        return( 
            <div className="project">
                <img src={this.props.img} />
                <div className="description">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                </div>
                <Button href={this.props.demo} target="_blank"> Demo </Button>
                <Button href={this.props.code} target="_blank"> Code </Button>
                    
            </div>
        )
    }
}

export default Project;