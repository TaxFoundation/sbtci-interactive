import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import USStateTable from './USStateTable';
import { IconTwitter, IconFacebook, IconLinkedIn, IconEmail } from './SocialIcons';
import Images from './Images';

class USState extends Component {
  render() {
    const bgImage = {
      backgroundImage: `url(${Images[`State${this.props.stateData.id}`]})`
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
            <USStateTable stateData={this.props.stateData} />
          </div>
          <div className="sbtci-state-social sbtci-box">
            <div className="sbtci-state-social-text">
              <h2>Spread the Word!</h2>
              <p>How does your state rank? Brag (or complain) to your friends!</p>
            </div>
            <div className="sbtci-state-social-buttons">
              <a href="" className="sbtci-state-social-button sbtci-social--twitter">
                <IconTwitter fill="#ffffff" />Twitter
              </a>
              <a href="" className="sbtci-state-social-button sbtci-social--facebook">
                <IconFacebook fill="#ffffff" />
                Facebook
              </a>
              <a href="" className="sbtci-state-social-button sbtci-social--linkedin">
                <IconLinkedIn fill="#ffffff" />
                LinkedIn
              </a>
              <a href="" className="sbtci-state-social-button sbtci-social--email">
                <IconEmail fill="#ffffff" />
                Email a Friend
              </a>
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
