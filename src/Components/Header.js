import React from 'react';
import { hexagon } from '../Constants';
import '../App.css';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';

const Header = () => {
  return (
    <div>
      <img id="hexagon-logo" src={hexagon} alt="hexagon-logo"/>
      <div id="nav-bar">
        <Link to="/projects" className="links">Projects</Link>
        <Link to="www.google.com" className="links">Resume</Link>
        <Link to="/about" className="links">About</Link>
      </div>
    </div>
  )
};

export default Header;