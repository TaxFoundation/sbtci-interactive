import React, { Component } from 'react';
import USStateTable from './USStateTable';
import { sortComparison } from './Helpers';
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

    const neighbors = this.props.USStates.filter((s) => {
      return stateData.neighbors.includes(s.id);
    });
    neighbors.push(stateData);
    neighbors.sort(sortComparison('total', 'asc'));

    const topStates = this.props.USStates.sort(sortComparison('total', 'asc')).slice(0, 5);
    const bottomStates = this.props.USStates.sort(sortComparison('total', 'desc')).slice(0, 5);

    const ListItem = ({s, list}) => {
      let listClass = s.id === this.props.stateId
        ? 'sbtci-box-list-item sbtci-box-list-item--highlighted'
        : 'sbtci-box-list-item';

      return (
        <li className={listClass}>
          <span style={{fontWeight: 300}}>#</span>{s.total.rank} {s.name}
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
            <p>Print!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default USState;
