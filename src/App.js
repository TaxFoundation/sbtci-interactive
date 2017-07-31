import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import USMap from './components/USMap';
import State from './components/State';
import Footer from './components/Footer';
import SBTCIData from './data/SBTCI.json';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
            <Route eaxct path="/" component={USMap} />
            <Route path="/state/:stateId" component={State} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
