import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import USStateTable from './USStateTable';
import { IconTwitter, IconFacebook, IconLinkedIn, IconEmail } from './SocialIcons';
import { StateImages } from './Images';

class USState extends Component {
  render() {
    const bgImage = {
      backgroundImage: `url(${StateImages[`State${this.props.stateData.id}`]})`
    }

    return (
      <div className="sbtci-state">
        <div
          className="sbtci-state-header"
          style={bgImage}
        >
          <h1>
            <span className="sbtci-state-header-rank">#{this.props.stateData.total.rank}</span>
            &nbsp;
            {this.props.stateData.name}
          </h1>
        </div>
        <div className="sbtci-state-content container">
          <div className="sbtci-box sbtci-state-table">
            <USStateTable taxTypes={this.props.taxTypes} stateData={this.props.stateData} />
          </div>
          <div className="sbtci-state-social sbtci-box">
            <div className="sbtci-state-social-text">
              <h2>Spread the Word!</h2>
              <p>How does your state rank? Brag (or complain) to your friends!</p>
            </div>
            <div className="sbtci-state-social-buttons">
              <IconTwitter
                className="sbtci-state-social-button sbtci-social--twitter"
                fill="#ffffff"
                text="Tweet"
              />
              <IconFacebook
                className="sbtci-state-social-button sbtci-social--facebook"
                fill="#ffffff"
                text="Share"
              />
              <IconLinkedIn
                className="sbtci-state-social-button sbtci-social--linkedin"
                fill="#ffffff"
                text="LinkedIn"
              />
              <IconEmail
                className="sbtci-state-social-button sbtci-social--email"
                fill="#ffffff"
                text="Email"
              />
            </div>
          </div>
          <div className="sbtci-state-neighbors sbtci-box">
            <h2 className="sbtci-box-heading">Neighboring States</h2>
            <div>Placeholder</div>
            <Link to="/" className="sbtci-box-footer">See Full Map</Link>
          </div>
          <div className="sbtci-state-top sbtci-box">
            <h2 className="sbtci-box-heading">Top States</h2>
            <div>Placeholder</div>
            <Link to="/" className="sbtci-box-footer">See Rankings</Link>
          </div>
          <div className="sbtci-state-bottom sbtci-box">
            <h2 className="sbtci-box-heading">Bottom States</h2>
            <div>Placeholder</div>
            <Link to="/" className="sbtci-box-footer">See Rankings</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default USState;
