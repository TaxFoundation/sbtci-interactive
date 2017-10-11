import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Metadata from './Metadata';
import USMap from './USMap';
import USMapDataSummary from './USMapDataSummary';
import RankingsTable from './RankingsTable';
import { IconTwitter, IconFacebook, IconLinkedIn, IconEmail } from './SocialIcons';
import { TaxImages } from './Images';
import { fullName } from './Helpers';
import TaxIcons from './TaxIcons';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUSState: {}
    };

    this.updateActiveState = this.updateActiveState.bind(this);
  }
  
  componentDidMount() {
    window.scrollTo(0, 0);
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

    const activeTax = this.props.taxTypes.filter((t) => {
      return this.props.activeTax === t.id;
    })[0];

    return (
      <div className="sbtci-home">
        <Metadata
          title={ 
            this.props.activeTax === 'total'
              ? 'State Business Tax Climate Index - Tax Foundation'
              : `${fullName(activeTax.name)} | State Business Tax Climate Index - Tax Foundation`
          }
          description={ 
            this.props.activeTax === 'total'
              ? 'The State Business Tax Climate Index is a measure of how well states structure their tax systems. It enables policymakers, business leaders, and taxpayers to gauge how their states’ tax systems compare, and provides a roadmap for improvement.'
              : activeTax.description
          }
          location={ this.props.location.pathname }
          image={TaxImages[this.props.activeTax]}
        />
        <div
          className="sbtci-home-header"
          style={bgImage}
        >
          <h1>
            { activeTax.name }
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
          <div
            className="sbtci-home-mobile-state-list sbtci-button sbtci-button--centered"
            onClick={() => {this.props.openStatesMenu();}}
          >
            See Your State
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
            let r = `/tax/${t.id}/`;
            let style = {
              borderTop: `3px solid ${t.hex}`
            };
            if (t.id === 'total') { r = '/'; }
            if (t.id === this.props.activeTax) {
              style.backgroundColor = 'rgba(95, 194, 255, 0.3)';
            }
            return (
              <Link
                className="sbtci-home-tax-nav-item"
                key={`tax-nav-${t.id}`}
                style={style}
                to={r}
              >
                {t.name}
              </Link>
            );
          })}
        </nav>
        <hr/>
        <div className="sbtci-home-rankings-table container">
          <h2 style={{textAlign: 'center'}}>Overall and Component Tax Ranks</h2>
          <RankingsTable USStateData={this.props.SBTCIData} taxTypes={this.props.taxTypes} />
        </div>
        <hr/>
        <div className="sbtci-home-categories container container--narrow">
          <h2 style={{textAlign: 'center'}}>Ranked Tax Categories</h2>
          <p>The State Business Tax Climate Index is a measure of how well states structure their tax systems. It enables policymakers, business leaders, and taxpayers to gauge how their states’ tax systems compare, and provides a roadmap for improvement.</p>
          <Link className="sbtci-button sbtci-button--centered" to="/">
            Read Full Methodology
          </Link>
          { this.props.taxTypes.filter(t => t.id !== 'total').map((t) => {
            return (
              <div className="sbtci-home-tax-type" key={`tax-desc-${t.id}`}>
                { TaxIcons[t.id]({className: 'sbtci-home-tax-type-icon'})}
                <h3>{ fullName(t.name) }</h3>
                <p>{ t.description }</p>
                <Link
                  className="sbtci-button"
                  style={{backgroundColor: t.hex}}
                  to={`/tax/${t.id}/`}
                >
                  See Map
                </Link>
              </div>
            );
          })}
        </div>
        <hr/>
        <div className="sbtci-home-changes container">
          <h2 style={{textAlign: 'center'}}>Notable Ranking Changes</h2>
          <div className="sbtci-home-notable-changes">
            {this.props.notableChanges.map((c) => {
              let stateData = this.props.SBTCIData.filter(s => s.id === c.id)[0];
              return (
                <div key={`change-${c.id}`} className="sbtci-home-notable-change">
                  <h3><Link to={`/state/${stateData.name.replace(/\s/g, '-').toLowerCase()}/`}>
                    {stateData.name}
                  </Link></h3>
                  <p>{c.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
