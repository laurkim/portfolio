import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from './Container/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('base')
);

registerServiceWorker();
