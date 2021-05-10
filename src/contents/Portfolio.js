import React, { Component } from 'react';
import project1 from '../img/project1.png';
import project2 from '../img/project2.png';
import project3 from '../img/project3.png';
// import project4 from '../img/project4.png';

class Portfolio extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Work</h1>
            <div className="hr_line line2 glass"><div className="inner2 inner3"></div></div>

            <div class="port_out port1 glass"><a href="https://github.com/mbingram/SwatchSwap-v2">
                <div class="project-title">Swatch Swap</div>
                <img src={project1} className="po1" alt="swatch"></img></a>
            </div>

            <div class="port_out port2 glass"><a href="https://github.com/mbingram/HeartBeet_frontend">
                <div class="project-title">HeartBeet <br></br> (front-end)</div>
                <img src={project2} className="po1" alt="heartbeet_front"></img></a>
            </div>

            <div class="port_out port3 glass"><a href="https://github.com/mbingram/HeartBeet_backend">
                <div class="project-title">HeartBeet <br></br> (back-end)</div>
                <img src={project3} className="po1" alt="heartbeet_back"></img></a>
            </div>
            
            </div>
            )
        }
    }
    
export default Portfolio
    