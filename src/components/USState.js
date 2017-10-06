import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import USStateTable from './USStateTable';
import { sortComparison } from './Helpers';
import { IconTwitter, IconFacebook, IconLinkedIn, IconEmail } from './SocialIcons';
import { StateImages } from './Images';

class USState extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    const bgImage = {
      backgroundImage: `url(${StateImages[`State${this.props.stateId}`]})`
    }

    const stateData = this.props.USStates.filter((s) => {
      return s.id === this.props.stateId;
    })[0];

    const neighbors = this.props.USStates.filter((s) => {
      return stateData.neighbors.includes(s.id);
    });
    neighbors.push(stateData);
    neighbors.sort(sortComparison('total', 'asc'));

    const topStates = this.props.USStates.sort(sortComparison('total', 'asc')).slice(0, 5);
    const bottomStates = this.props.USStates.sort(sortComparison('total', 'desc')).slice(0, 5);

    const ListItem = ({s}) => {
      let listClass = s.id === this.props.stateId
        ? 'sbtci-box-list-item sbtci-box-list-item--highlighted'
        : 'sbtci-box-list-item';

      let r = `/state/${s.name.replace(/\s/g, '-').toLowerCase()}`;

      return (
        <li className={listClass}>
          <Link to={r}><span style={{fontWeight: 300}}>#</span>{s.total.rank} {s.name}</Link>
        </li>
      );
    };

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
            <ul className="sbtci-box-list">
              {neighbors.map((s) => {
                return <ListItem key={`neighbors-${s.id}`} s={s} />;
              })}
            </ul>
          </div>
          <div className="sbtci-state-top sbtci-box">
            <div className="sbtci-box-heading">Top States</div>
            <ul className="sbtci-box-list">
              {topStates.map((s) => {
                return <ListItem key={`top-${s.id}`} s={s} />;
              })}
            </ul>
          </div>
          <div className="sbtci-state-bottom sbtci-box">
            <div className="sbtci-box-heading">Bottom States</div>
            <ul className="sbtci-box-list">
              {bottomStates.map((s) => {
                return <ListItem key={`bottom-${s.id}`} s={s} />;
              })}
            </ul>
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
            <p
              className="sbtci-state-print-button"
              onClick={() => window.print()}
            >
              Print!
            </p>
          </div>
        </div>
        <hr className="hide-print" />
        <div className="sbtci-state-read-more">
          <h2 style={{textAlign: 'center'}}>Learn More About This State's Taxes</h2>
          <a
            className="sbtci-button sbtci-button--centered"
            href={`https://taxfoundation.org/state/${stateData.name.replace(/\s/g, '-').toLowerCase()}`}
          >
              Read More About {stateData.name}
          </a>
        </div>
      </div>
    );
  }
}

export default USState;
