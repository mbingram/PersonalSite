import React, { Component } from 'react';
import Social from '../components/Social';
import ambivalent from '../img/mostly-ambivalent.png';

class Contact extends Component {
    render() {
        return (
            <div className="condiv contact">
            <h1 className="subtopic">Contact Me</h1>
            <div className="hr_line line2 glass"><div className="inner2 inner3"></div></div>
            <a href="https://www.mostlyambivalent.com"><div class="con_out glass"><img src={ambivalent} class="co1" alt="mostly-ambivalent"></img></div></a>
            <a href="https://docs.google.com/document/d/1TiU1WGOeHR7nsJ4WkXXXQawNhoqB4lUtKInd7gl2zLs/edit?usp=sharing"><div className="back3 glass">Resume</div></a>
            <a href="mailto:mbingramm@gmail.com"><div className="back3 back4 glass">Contact Me</div></a>
            <div className="hr_line line3 glass"><div className="inner3"></div></div>
            <Social />
            </div>
            )
        }
    }
    
    export default Contact
    