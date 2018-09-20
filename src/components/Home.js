import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Metadata from './Metadata';
import USMap from './USMap';
import USMapDataSummary from './USMapDataSummary';
import RankingsTable from './RankingsTable';
import {
  IconTwitter,
  IconFacebook,
  IconLinkedIn,
  IconEmail,
} from './SocialIcons';
import { TaxImages } from './Images';
import { fullName } from './Helpers';
import TaxIcons from './TaxIcons';
import { SocialBox } from './Box';

const Header = styled.div`
  align-items: center;
  background-color: ${props => props.color};
  background-image: ${props => props.bg};
  background-position: center;
  background-size: cover;
  background-blend-mode: overlay;
  display: flex;
  justify-content: center;
  height: 128px;
  width: 100%;

  @media print {
    background-color: #ffffff;
    height: 6rem;
  }

  h1 {
    background-color: rgba(0, 0, 0, 0.5);
    color: #ffffff;
    display: block;
    font-family: 'Oswald', sans-serif;
    font-size: 3rem;
    font-weight: 400;
    margin: 0;
    padding: 1rem 1.6rem;
    text-align: center;

    @media screen and (min-width: ${props => props.theme.tabletWidth}) {
      font-size: 2rem;
    }

    @media print {
      color: #000000;
    }
  }
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUSState: {},
    };

    this.updateActiveState = this.updateActiveState.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  updateActiveState(stateId) {
    const newActiveState = this.props.SBTCIData.filter(USState => {
      return USState.id === stateId;
    })[0];
    this.setState({ activeUSState: newActiveState });
  }

  render() {
    const bgImage = `url(${TaxImages[this.props.activeTax]})`;

    const activeTax = this.props.taxTypes.filter(t => {
      return this.props.activeTax === t.id;
    })[0];

    return (
      <div className="sbtci-home">
        <Metadata
          title={
            this.props.activeTax === 'total'
              ? 'State Business Tax Climate Index - Tax Foundation'
              : `${fullName(
                  activeTax.name
                )} | State Business Tax Climate Index - Tax Foundation`
          }
          description={
            this.props.activeTax === 'total'
              ? 'The State Business Tax Climate Index is a measure of how well states structure their tax systems. It enables policymakers, business leaders, and taxpayers to gauge how their states’ tax systems compare, and provides a roadmap for improvement.'
              : activeTax.description
          }
          location={this.props.location.pathname}
          image={
            this.props.activeTax === 'total'
              ? TaxImages['meta']
              : TaxImages[this.props.activeTax]
          }
        />
        <Header
          bg={bgImage}
          color={
            this.props.taxTypes.filter(t => t.id === this.props.activeTax)[0]
              .hex
          }
        >
          <h1>{activeTax.name}</h1>
        </Header>
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
            onClick={() => {
              this.props.openStatesMenu();
            }}
          >
            See Your State
          </div>

          <USMapDataSummary
            activeUSState={this.state.activeUSState}
            taxTypes={this.props.taxTypes}
          />

          <SocialBox>
            <div className="text">
              <h2>Spread the Word!</h2>
              <p>
                How does your state rank? Brag (or complain) to your friends!
              </p>
            </div>
            <div className="buttons">
              <IconTwitter
                className="button sbtci-social--twitter"
                fill="#ffffff"
              />
              <IconFacebook
                className="button sbtci-social--facebook"
                fill="#ffffff"
              />
              <IconLinkedIn
                className="button sbtci-social--linkedin"
                fill="#ffffff"
              />
              <IconEmail
                className="button sbtci-social--email"
                fill="#ffffff"
              />
            </div>
          </SocialBox>
        </div>
        <nav className="sbtci-home-tax-nav container">
          {this.props.taxTypes.map(t => {
            let r = `/tax/${t.id}/`;
            let style = {
              borderTop: `3px solid ${t.hex}`,
            };
            if (t.id === 'total') {
              r = '/';
            }
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
        <hr />
        <div className="sbtci-home-rankings-table container">
          <h2 style={{ textAlign: 'center' }}>
            Overall and Component Tax Ranks
          </h2>
          <RankingsTable
            USStateData={this.props.SBTCIData}
            taxTypes={this.props.taxTypes}
          />
        </div>
        <hr />
        <div className="sbtci-home-categories container container--narrow">
          <h2 style={{ textAlign: 'center' }}>Ranked Tax Categories</h2>
          <a
            className="sbtci-button sbtci-button--centered"
            href="https://files.taxfoundation.org/20171016171625/SBTCI_2018.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Full Methodology
          </a>
          {this.props.taxTypes.filter(t => t.id !== 'total').map(t => {
            return (
              <div className="sbtci-home-tax-type" key={`tax-desc-${t.id}`}>
                {TaxIcons[t.id]({ className: 'sbtci-home-tax-type-icon' })}
                <h3>{fullName(t.name)}</h3>
                <p>{t.description}</p>
                <Link
                  className="sbtci-button"
                  style={{ backgroundColor: t.hex }}
                  to={`/tax/${t.id}/`}
                >
                  See Map
                </Link>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="sbtci-home-changes container">
          <h2 style={{ textAlign: 'center' }}>Notable Ranking Changes</h2>
          <div className="sbtci-home-notable-changes">
            {this.props.notableChanges.map(c => {
              let stateData = this.props.SBTCIData.filter(
                s => s.id === c.id
              )[0];
              return (
                <div
                  key={`change-${c.id}`}
                  className="sbtci-home-notable-change"
                >
                  <h3>
                    <Link
                      to={`/state/${stateData.name
                        .replace(/\s/g, '-')
                        .toLowerCase()}/`}
                    >
                      {stateData.name}
                    </Link>
                  </h3>
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
