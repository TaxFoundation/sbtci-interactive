import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import USStateTable from './USStateTable';
import { ordinal, sortComparison } from './Helpers';
import { IconTwitter, IconFacebook, IconLinkedIn, IconEmail } from './SocialIcons';
import { StateImages } from './Images';
import ShareBoxes from './ShareBoxes';

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
        <Helmet>
          <title>{ `${stateData.name} | State Business Tax Climate Index` }</title>
        </Helmet>
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
              <h2>Spread the Word!</h2>
              <p>How does your state rank? Brag (or complain) to your friends!</p>
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
                emailSubject={ `Check out ${stateData.name} in the State Business Tax Climate Index` }
                emailBody={ `${stateData.name} ranks ${ordinal(stateData.total.rank)} overall. See more here: ${window.location.href}` }
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
        <div className="sbtci-state-share-boxes container hide-print">
          <ShareBoxes stateData={stateData} taxTypes={this.props.taxTypes} />
        </div>
        <hr className="hide-print" />
        <div className="sbtci-state-read-more hide-print">
          <a
            className="sbtci-button"
            href={`https://taxfoundation.org/state/${stateData.name.replace(/\s/g, '-').toLowerCase()}`}
            target="_blank"
          >
            {`Learn More About ${stateData.name}'s Taxes`}
          </a>
        </div>
      </div>
    );
  }
}

export default USState;
