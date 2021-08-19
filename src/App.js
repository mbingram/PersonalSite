import React, {useState} from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Portfolio from './contents/Portfolio';
import Contact from './contents/Contact';
import Three from './contents/Three';

const GlobalStyle = createGlobalStyle`
  body{
    background: linear-gradient(${props => props.theme.mode === 'dark' ? '#868f96, #596164' : '#FFB1AF, #D6D4FF, #B3EEFF'});
  }
  h1{
    color: ${props => props.theme.mode === 'dark' ? 'white' : 'black' };
  }
  h2{
    color: ${props => props.theme.mode === 'dark' ? 'white' : 'black' };
  }
  h3{
    color: ${props => props.theme.mode === 'dark' ? '#FFB1AF' : 'black' };
  }
  h4{
    color: ${props => props.theme.mode === 'dark' ? '#FFB1AF' : 'black' };
  }
  p{
    color: ${props => props.theme.mode === 'dark' ? 'white' : 'black' };
  }
  li{
    color: ${props => props.theme.mode === 'dark' ? 'white' : 'black' };
  }
  mark{
    background-image: linear-gradient(${props => props.theme.mode === 'dark' ? '#000000, #868f96' : '120deg,#B3EEFF 0,#D6D4FF 100%'});
  }

`

function App() {
  const [theme, setTheme] = useState({ mode: 'light'});
  return (
    <ThemeProvider theme={theme}>
      <>
    <GlobalStyle />
    <Router>
    <div className="App">
    <Navbar />
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/about">
    <About />
    </Route>
    <Route path="/portfolio">
    <Portfolio />
    </Route>
    <Route path="/contact">
    <Contact />
    </Route>
    <Route path="/three">
    <Three />
    </Route>
    <div class="back1 glass" onClick={e => setTheme(
      theme.mode === 'dark' ? {mode: 'light'} : {mode: 'dark'}
    )}><i class={theme.mode === 'dark' ? "fa fa-sun i1" : "fa fa-moon i1"}></i></div>
    </div>
    </Router>
    </>
    </ThemeProvider>
    );
  }
  
  export default App;
  