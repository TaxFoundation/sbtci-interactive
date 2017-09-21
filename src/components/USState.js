import React, { Component } from 'react';
import USStateTable from './USStateTable';
import { IconTwitter, IconFacebook, IconLinkedIn, IconEmail } from './SocialIcons';
import { StateImages } from './Images';

class USState extends Component {
  render() {
    const bgImage = {
      backgroundImage: `url(${StateImages[`State${this.props.stateId}`]})`
    }

    const stateData = this.props.USStates.filter((s) => {
      return s.id === this.props.stateId;
    })[0];

    return (
      <div className="sbtci-state">
        <div
          className="sbtci-state-header"
          style={bgImage}
        >
          <h1>
            <span className="sbtci-state-header-rank">#{stateData.total.rank}</span>
            &nbsp;
            {stateData.name}
          </h1>
        </div>
        <div className="sbtci-state-content container">
          <div className="sbtci-box sbtci-state-table">
            <USStateTable taxTypes={this.props.taxTypes} stateData={stateData} />
          </div>
          <div className="sbtci-state-neighbors sbtci-box">
            <div className="sbtci-box-heading">Neighboring States</div>
            <div>Placeholder</div>
          </div>
          <div className="sbtci-state-top sbtci-box">
            <div className="sbtci-box-heading">Top States</div>
            <div>Placeholder</div>
          </div>
          <div className="sbtci-state-bottom sbtci-box">
            <div className="sbtci-box-heading">Bottom States</div>
            <div>Placeholder</div>
          </div>
          <div className="sbtci-state-social sbtci-box">
            <div className="sbtci-state-social-text">
              <p>Share this page with your friends!</p>
            </div>
            <div className="sbtci-state-social-buttons">
              <IconTwitter
                className="sbtci-state-social-button sbtci-social--twitter"
                fill="#ffffff"
              />
              <IconFacebook
                className="sbtci-state-social-button sbtci-social--facebook"
                fill="#ffffff"
              />
              <IconLinkedIn
                className="sbtci-state-social-button sbtci-social--linkedin"
                fill="#ffffff"
              />
              <IconEmail
                className="sbtci-state-social-button sbtci-social--email"
                fill="#ffffff"
              />
            </div>
          </div>
          <div className="sbtci-state-print sbtci-box">
            <p>Get a handy one-pager on your state!</p>
            <p>Print!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default USState;
