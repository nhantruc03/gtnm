import './App.css';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './router/routermodule';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Router>
        <Routing />
      </Router>
    );
  }
}

export default App;
