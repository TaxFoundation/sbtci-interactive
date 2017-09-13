import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IconTwitter, IconFacebook, IconLinkedIn, IconEmail } from './SocialIcons';
import Logo from '../images/logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="sbtci-header">
        <div className="sbtci-header-container container">
          <Link className="sbtci-header-logo" to="/">
          <img src={ Logo } alt="State Business Tax Climate Index" />
        </Link>
        <div className="sbtci-header-social">
          <IconTwitter className="sbtci-header-social-icon" fill="#ffffff" />
          <IconFacebook className="sbtci-header-social-icon" fill="#ffffff" />
          <IconLinkedIn className="sbtci-header-social-icon" fill="#ffffff" />
          <IconEmail className="sbtci-header-social-icon" fill="#ffffff" />
        </div>
        <nav className="sbtci-header-nav">
          <Link className="sbtci-header-nav-link" to="/">Rankings</Link>
          <Link className="sbtci-header-nav-link" to="/">States</Link>
          <Link className="sbtci-header-nav-link" to="/">Methodology</Link>
        </nav>
        <nav className="sbtci-header-rankings-nav">
          {this.props.taxTypes.map((t) => {
            let r = `/tax/${t.id}`;
            if (t.id === 'total') { r = '/'; }
            return (
              <Link to={r}>{ t.name }</Link>
            );
          })}
        </nav>
        <nav className="sbtci-header-states-nav">
          {this.props.USStates.map((s) => {
            return (
              <Link to={`/state/${s.name.replace(/\s/g, '-').toLowerCase()}`}>{ s.name }</Link>
            );
          })}
        </nav>
      </div>
    </header>
    );
  }
}

export default Header;
