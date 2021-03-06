import React from 'react';
import { hexagon } from '../Constants';
import '../App.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <img id="hexagon-logo" src={hexagon} alt="hexagon-logo"/>
      <div id="nav-bar">
        <Link to="/projects" className="project-link">Projects</Link>
        <Link to="./resume.pdf" target="_blank" className="project-link">Resume</Link>
        <Link to="/about" className="project-link">About</Link>
      </div>
    </div>
  )
};

export default Header;