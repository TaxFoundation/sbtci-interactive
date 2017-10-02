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
    const taxTypeLinks = this.props.taxTypes.map((t) => {
      let r = `/tax/${t.id}`;
      if (t.id === 'total') { r = '/'; }
      return (
        <Link className="sbtci-header-nav-link" key={`nav-tax-${t.id}`} to={r}>{ t.name }</Link>
      );
    });

    const stateLinks = this.props.USStates.map((s) => {
      return (
        <Link
          className="sbtci-header-nav-link"
          key={`nav-state-${s.name.replace(/\s/g, '-').toLowerCase()}`}
          to={`/state/${s.name.replace(/\s/g, '-').toLowerCase()}`}
        >
          { s.name }
        </Link>
      );
    });

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
          <div className="sbtci-header-nav-category" to="/">
            Rankings
            <nav className="sbtci-header-rankings-nav">
              { taxTypeLinks }
            </nav>
          </div>
          <div className="sbtci-header-nav-category" to="/">
            States
            <nav className="sbtci-header-states-nav">
              { stateLinks }
            </nav>
          </div>
          <Link className="sbtci-header-nav-category" to="/">Methodology</Link>
        </nav>

        <div className="sbtci-header-menu" onClick={(e) => this.toggleMobileMenu()}>Menu</div>
        <div
          className={
            this.state.menuOpen
            ? 'sbtci-header-mobile-nav sbtci-header-mobile-nav--active'
            : 'sbtci-header-mobile-nav sbtci-header-mobile-nav--inactive'
          }
        >
          <div className="sbtci-header-mobile-nav-top-level-item">
            <div>Rankings</div>
            { taxTypeLinks }
          </div>
          <div className="sbtci-header-mobile-nav-top-level-item">
            <div>States</div>
            { stateLinks }
          </div>
          <div className="sbtci-header-mobile-nav-top-level-item">
            <Link to="/">Methodology</Link>
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default Header;
