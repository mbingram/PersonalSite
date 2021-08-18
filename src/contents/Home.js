import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from './selfie.png';
import Social from '../components/Social'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} className="profilepic" alt="profilepic"></img>
            <h1>Mary Beth <mark>Ingram</mark></h1>
            <ReactTypingEffect className="typingeffect" text={['A Full Stack Developer','A Creator','A Good Person']} speed={100} eraseDelay={900}/>
            <div className="hr_line glass"><div className="hr_inner"></div></div>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    