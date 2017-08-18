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
            <div className="sbtci-home-social-text">
              <h2>Spread the Word!</h2>
              <p>How does your state rank? Brag (or complain) to your friends!</p>
            </div>
            <div className="sbtci-home-social-buttons">
              <a href="" className="sbtci-home-social-button sbtci-social--twitter">T</a>
              <a href="" className="sbtci-home-social-button sbtci-social--facebook">F</a>
              <a href="" className="sbtci-home-social-button sbtci-social--linkedin">L</a>
              <a href="" className="sbtci-home-social-button sbtci-social--email">E</a>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Home;
