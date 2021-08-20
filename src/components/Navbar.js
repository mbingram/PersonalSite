import React, { Component } from 'react';
import Navitem from './Navitem';
import profilepic from '../contents/selfie.png'

// const profilepic = "https://firebasestorage.googleapis.com/v0/b/marybethdev-a6a64.appspot.com/o/IMG_20210202_173427_568.jpg?alt=media&token=6ac378d2-9e41-4934-8018-42e393de6770"

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <nav className="glass">
            <img src={profilepic} className="profilepic" alt="profilepic"></img>
            <h2>Mary Beth <mark>Ingram</mark></h2>
            <p>Full Stack Developer</p>
            <ul>
            <Navitem item="Home" tolink="/"  activec={this.activeitem}></Navitem>
            <Navitem item="About" tolink="/about"  activec={this.activeitem}></Navitem>
            <Navitem item="Work" tolink="/portfolio"  activec={this.activeitem}></Navitem>
            <Navitem item="Contact" tolink="/contact"  activec={this.activeitem}></Navitem>
            <Navitem item="Play" tolink="/three"  activec={this.activeitem}></Navitem>
            </ul>
            </nav>
            )
        }
    }
    
    export default Navbar
    