import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IconTwitter, IconFacebook, IconLinkedIn, IconEmail } from './SocialIcons';
import Logo from '../images/logo.svg';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false
    };

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    let newState = Object.assign(this.state);
    newState.menuOpen = !newState.menuOpen;
    this.setState(newState);
  }

  render() {
    let menuOpenClass = this.state.menuOpen
      ? 'sbtci-header-nav sbtci-header-nav--active'
      : 'sbtci-header-nav';

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
        <div className="sbtci-header-menu" onClick={(e) => this.toggleMobileMenu()}>Menu</div>
        <nav className={menuOpenClass}>
          <Link className="sbtci-header-nav-link" to="/">
            Rankings
            <nav className="sbtci-header-rankings-nav">
              {this.props.taxTypes.map((t) => {
                let r = `/tax/${t.id}`;
                if (t.id === 'total') { r = '/'; }
                return (
                  <Link to={r}>{ t.name }</Link>
                );
              })}
            </nav>
          </Link>
          <Link className="sbtci-header-nav-link" to="/">
            States
            <nav className="sbtci-header-states-nav">
              {this.props.USStates.map((s) => {
                return (
                  <Link to={`/state/${s.name.replace(/\s/g, '-').toLowerCase()}`}>{ s.name }</Link>
                );
              })}
            </nav>
          </Link>
          <Link className="sbtci-header-nav-link" to="/">Methodology</Link>
        </nav>
      </div>
    </header>
    );
  }
}

export default Header;
