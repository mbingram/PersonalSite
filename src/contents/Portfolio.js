import React, { Component } from 'react';
import project1 from '../img/project1.png';
// import project2 from '../img/project2.png';
// import project3 from '../img/project3.png';
import project4 from '../img/project4.png';

class Portfolio extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Previous Work</h1>
            <div className="hr_line line2 glass"><div className="inner2 inner3"></div></div>
            <div className="prof-exp-title">
            <h3>Professional Experience</h3>
            <h4>Full Stack Software Engineer -- CLMBR</h4>
            </div>
            <div className="experience-paragraph">
            <p className="p10">
            -Full Stack Engineer for a fast-paced startup environment. Independently pursued bug fixes and made pull requests prior to a major hardware/software launch.<br/>
            <br/>
            -Worked with React and TypeScript to optimize existing functionality of the admin website and class management service.<br/>
            <br/>
            -Worked through tickets both independently and while pairing in person.<br/>
            </p>
            </div>

            <div class="port_out port3 glass"><a href="https://github.com/mbingram/SwatchSwap-v2">
                <div class="project-title">Swatch Swap</div>
                <img src={project1} className="po1" alt="swatch"></img></a>
            </div>

            {/* <div class="port_out port2 glass"><a href="https://github.com/mbingram/HeartBeet_frontend">
                <div class="project-title">HeartBeet <br></br> (front-end)</div>
                <img src={project2} className="po1" alt="heartbeet_front"></img></a>
            </div>

            <div class="port_out port3 glass"><a href="https://github.com/mbingram/HeartBeet_backend">
                <div class="project-title">HeartBeet <br></br> (back-end)</div>
                <img src={project3} className="po1" alt="heartbeet_back"></img></a>
            </div> */}

            <div class="port_out port4 glass"><a href="https://github.com/mbingram/PersonalSite">
                <div class="project-title">Portfolio Website</div>
                <img src={project4} className="po1" alt="portfolio"></img></a>
            </div>
            
            </div>
            )
        }
    }
    
export default Portfolio
    