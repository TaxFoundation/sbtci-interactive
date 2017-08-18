import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import USStateTable from './USStateTable';
import { IconTwitter, IconFacebook, IconLinkedIn, IconEmail } from './SocialIcons';

class USState extends Component {
  constructor(props) {
    super(props);
    this.state = props.stateData;
  }

  render() {
    return (
      <div className="sbtci-state">
        <div
          className="sbtci-state-header"
        >
          <h1><span className="sbtci-state-header-rank">#{this.state.total.rank}</span> {this.state.name}</h1>
        </div>
        <div className="sbtci-state-content container">
          <div className="sbtci-box sbtci-state-table">
            <USStateTable stateData={this.state} />
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
