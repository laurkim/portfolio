import React from 'react';
import { hexagon } from '../Constants';
import '../App.css';
import { BrowserRouter as Route, Link } from "react-router-dom";


const Header = () => {
  return (
    <div>
      <img id="hexagon-logo" src={hexagon} alt="hexagon-logo"/>
      <div id="nav-bar">
        <Link to="www.google.com" target="_blank">Projects</Link>
        <Link to="www.google.com" target="_blank">Resume</Link>
        <Link to="www.google.com" target="_blank">About</Link>
      </div>
    </div>
  )
};

export default Header;