import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { withRouter } from 'react-router';
import '../App.css';
import Header from '../Components/Header';
import ProjectsContainer from '../Components/ProjectsContainer';
import About from '../Components/About';

class App extends Component {
  render() {
    return (
      <div id="container">
          <Header />
          <Route exact path="/" component={About} />
          <Route path="/projects" component={ProjectsContainer} />
          <Route path="/about" component={About} />
      </div>
    );
  }
}

export default withRouter(App);
