import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <div className="hr_line line2 glass"><div className="inner2"></div></div>
            <h2 className="abouthead">Mary Beth <mark className="mark2">Ingram</mark></h2>
            <p>Full Stack Developer</p>
            <br></br>
            <div className="about-paragraph">
            <p className="p10">My name is <b>Mary Beth</b>; you can call me <b>MB</b> if you'd like. <br/>
            I am a natural <b>designer</b>, a <b>team player</b>, and an <b>empathetic leader</b>. <br/>
            <br/>
            I am passionate about learning and exploring new technologies, and find that the best learning happens when
            faced with real challenges.
            Prior to starting a career in software engineering, I received an education in Graphic Design from Tallahassee Community College.
            In 2020, I attended Flatiron School of Software Engineering in Denver, where I fell in love with coding and the creative
            opportunities that come along with it.
            </p>
            </div>
            <div className="Edu">
            <h3>Education</h3>
            <h4>Graphic Design Production</h4>
            <p className="p1">Tallahassee Community College</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>2012-2014</p>
            <h4>Software Engineering</h4>
            <p className="p1">Flatiron School of Software Engineering</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>2020-2021</p>
            </div>

            <h3 class="sk_head">Skills</h3>
            <div class="sk glass">React</div>
            <div class="sk s2 glass">JavaScript</div>
            <div class="sk s3 glass">Three.js</div>
            <div class="sk s4 glass">Ruby/Rails</div>
            <div class="sk s5 glass">HTML</div>
            <div class="sk s6 glass">CSS</div>
            </div>
            )
        }
    }
    
export default About
    