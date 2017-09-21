import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import USMap from './USMap';
import USMapDataSummary from './USMapDataSummary';
import RankingsTable from './RankingsTable';
import { IconTwitter, IconFacebook, IconLinkedIn, IconEmail } from './SocialIcons';
import { TaxImages } from './Images';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUSState: {}
    }

    this.updateActiveState = this.updateActiveState.bind(this);
  }

  updateActiveState(stateId) {
    const newActiveState = this.props.SBTCIData.filter((USState) => {
      return USState.id === stateId;
    })[0];
    this.setState({ activeUSState: newActiveState});
  }

  render() {
    const bgImage = {
      backgroundImage: `url(${TaxImages[this.props.activeTax]})`,
      backgroundColor: this.props.taxTypes.filter(t => t.id === this.props.activeTax)[0].hex,
      backgroundBlendMode: 'overlay'
    };

    return (
      <div className="sbtci-home">
        <div
          className="sbtci-home-header"
          style={bgImage}
        >
          <h1>
            { this.props.taxTypes.filter((t) => {
              return this.props.activeTax === t.id;
              })[0].name
            }
          </h1>
        </div>
        <div className="sbtci-home-map-section container">
          <div className="sbtci-home-map">
            <USMap
              USData={this.props.USData}
              SBTCIData={this.props.SBTCIData}
              updateActiveState={this.updateActiveState}
              activeTax={this.props.activeTax}
              activeUSState={this.state.activeUSState}
            />
          </div>

          <USMapDataSummary
            activeUSState={this.state.activeUSState}
            taxTypes={this.props.taxTypes}
          />

          <div className="sbtci-home-social sbtci-box">
            <div className="sbtci-home-social-text">
              <h2>Spread the Word!</h2>
              <p>How does your state rank? Brag (or complain) to your friends!</p>
            </div>
            <div className="sbtci-home-social-buttons">
              <IconTwitter
                className="sbtci-home-social-button sbtci-social--twitter"
                fill="#ffffff"
              />
              <IconFacebook
                className="sbtci-home-social-button sbtci-social--facebook"
                fill="#ffffff"
              />
              <IconLinkedIn
                className="sbtci-home-social-button sbtci-social--linkedin"
                fill="#ffffff"
              />
              <IconEmail
                className="sbtci-home-social-button sbtci-social--email"
                fill="#ffffff"
              />
            </div>
          </div>
        </div>
        <nav className="sbtci-home-tax-nav container">
          {this.props.taxTypes.map((t) => {
            let r = `/tax/${t.id}`;
            let style = {
              borderTop: `3px solid ${t.hex}`
            }
            if (t.id === 'total') { r = '/'; }
            if (t.id === this.props.activeTax) {
              style.backgroundColor = 'rgba(95, 194, 255, 0.3)'
            }
            return <Link
              className="sbtci-home-tax-nav-item"
              key={`tax-nav-${t.id}`}
              style={style}
              to={r}
              >{t.name}</Link>;
            })}
          </nav>
        <hr />
        <div className="sbtci-home-rankings-table container">
          <h2 style={{textAlign: 'center'}}>Overall and Component Tax Ranks</h2>
          <RankingsTable USStateData={this.props.SBTCIData} taxTypes={this.props.taxTypes} />
        </div>
      </div>
    );
  }
}

export default Home;
