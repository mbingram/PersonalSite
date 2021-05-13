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
            <p className="p10">My name is Mary Beth; you can call me MB if you'd like. <br/>
            I have a background in art, and I attended Tallahassee Community College for Graphic Design Production.
            The education I recieved allows me the opportuinity
            to produce a lot of my own material for web apps that I am building and designing. With a long history of
            athletic participation, I am a natural at working with a team. I'm a quick learner, and also not a bad coach!
            My natural inclination towards visual creativity steers me in the direction of front-end development,
            but I am well-versed in back-end as well.
            </p>
            <div className="Edu">
            </div>
            <h3>Education</h3>
            <h4>Graphic Design Production</h4>
            <p className="p1">Tallahassee Community College</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>2012-2014</p>
            <h4>Software Engineering</h4>
            <p className="p1">Flatiron School of Software Engineering</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>2020-2021</p>

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
    