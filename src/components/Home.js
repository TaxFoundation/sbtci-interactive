import React, { Component } from 'react';
import USMap from './USMap';
import { IconTwitter, IconFacebook, IconLinkedIn, IconEmail } from './SocialIcons';
import SBTCIData from '../data/SBTCI.json';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      SBTCIData,
      activeUSState: {}
    }

    this.updateActiveState = this.updateActiveState.bind(this);
  }

  updateActiveState(stateId) {
    const newActiveState = this.state.SBTCIData.filter((USState) => {
      return USState.id === stateId;
    })[0];
    this.setState({ activeUSState: newActiveState});
  }

  render() {
    const domain = 'localhost'; //TODO update with actual domain when known

    return (
      <div className="sbtci-home">
        <div className="sbtci-home-map-section container">
          <div className="sbtci-home-map">
            <USMap
              SBTCIData={this.state.SBTCIData}
              updateActiveState={this.updateActiveState}
            />
          </div>


          <div className="sbtci-home-data-summary sbtci-box">
            <div className="sbtci-box-heading">
              {this.state.activeUSState.name ? this.state.activeUSState.name : 'Rankings Summary'}
            </div>
            {this.state.activeUSState.total ? (
              <ul>
                <li>Overall Rank {this.state.activeUSState.total.rank}</li>
                <li>Individual Rank {this.state.activeUSState.individual.rank}</li>
                <li>Corporate Rank {this.state.activeUSState.corporate.rank}</li>
                <li>Sales Rank {this.state.activeUSState.sales.rank}</li>
                <li>UI Rank {this.state.activeUSState.unemployment.rank}</li>
                <li>Property Rank {this.state.activeUSState.propertyTax.rank}</li>
              </ul>
            ) : (
              <p>Hover over a state in the map to see its rankings.</p>
            )}
          </div>

          <div className="sbtci-home-social sbtci-box">
            <div className="sbtci-home-social-text">
              <h2>Spread the Word!</h2>
              <p>How does your state rank? Brag (or complain) to your friends!</p>
            </div>
            <div className="sbtci-home-social-buttons">
              <a
                href={`https://twitter.com/intent/tweet?text=${domain + this.props.location.pathname}`}
                className="sbtci-home-social-button sbtci-social--twitter">
                <IconTwitter fill="#ffffff" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${domain + this.props.location.pathname}`}
                className="sbtci-home-social-button sbtci-social--facebook">
                <IconFacebook fill="#ffffff" />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${domain + this.props.location.pathname}`}
                className="sbtci-home-social-button sbtci-social--linkedin">
                <IconLinkedIn fill="#ffffff" />
              </a>
              <a href="" className="sbtci-home-social-button sbtci-social--email">
                <IconEmail fill="#ffffff" />
              </a>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Home;
