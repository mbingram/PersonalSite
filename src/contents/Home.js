import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social'

const codeypic = "https://firebasestorage.googleapis.com/v0/b/marybethdev-a6a64.appspot.com/o/Image%20from%20iOS.jpg?alt=media&token=9cf87680-b3d5-4f01-bcc4-0bb5456aa2c5"

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            {/* <img src={profilepic} className="profilepic" alt="profilepic"></img> */}
            <img src={codeypic} className="codeypic" alt="profilepic"></img>
            <h1>Mary Beth <mark>Ingram</mark></h1>
            <ReactTypingEffect className="typingeffect" text={['A Full Stack Developer','A Creator','A Good Person']} speed={100} eraseDelay={900}/>
            <div className="hr_line glass"><div className="hr_inner"></div></div>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    