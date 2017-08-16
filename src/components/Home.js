import React, { Component } from 'react';
import USMap from './USMap';

class Home extends Component {
  render() {
    return (
      <div className="sbtci-home">
        <div className="sbtci-home-map-section container">
          <div className="sbtci-home-map">
            <USMap />
          </div>
          <div className="sbtci-home-data-summary sbtci-box">
            <p>Filler</p>
          </div>
          <div className="sbtci-home-social sbtci-box">
            <p>Filler</p>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Home;
