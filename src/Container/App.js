import React, { Component } from 'react';
import '../App.css';
import Header from '../Components/Header';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div id="container">
        <Router>
          <Header />
        </Router>
      </div>
    );
  }
}

export default App;
