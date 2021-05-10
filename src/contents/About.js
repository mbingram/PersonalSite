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
                {/* <div class="back1 back2"><i class="fa fa-book i1 i3"></i></div> */}
            </div>
            <h3>Education</h3>
            <div className="vr_line glass">
                <div className="vr_inner inn1"></div>
                <div className="vr_inner inn2"></div>
            </div>
            <h4>Graphic Design Production</h4>
            <p className="p1">Tallahassee Community College</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>2012-2014</p>
            <h4>High School</h4>
            <p className="p1">Lawton Chiles High School, Tallahassee, FL</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>May 2010</p>

            <h3 class="sk_head">Skills</h3>
            <div class="sk glass">React</div>
            <div class="sk s2 glass">JavaScript</div>
            <div class="sk s3 glass">HTML</div>
            <div class="sk s4 glass">CSS</div>
            <div class="sk s5 glass">Ruby</div>
            <div class="sk s6 glass">Rails</div>
            </div>
            )
        }
    }
    
export default About
    