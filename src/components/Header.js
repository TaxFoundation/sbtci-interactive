import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IconTwitter, IconFacebook, IconLinkedIn } from './SocialIcons';
import Logo from '../images/logo.svg';

class Header extends Component {
  render() {
    const taxTypeLinks = this.props.taxTypes.map((t) => {
      let r = `/tax/${t.id}/`;
      if (t.id === 'total') { r = '/'; }
      return (
        <Link
          className="sbtci-header-nav-link"
          key={`nav-tax-${t.id}`}
          onClick={() => this.props.closeAllMobileMenu()}
          to={r}
        >
          { t.name }
        </Link>
      );
    });

    const stateLinks = this.props.USStates.map((s) => {
      return (
        <Link
          className="sbtci-header-nav-link"
          key={`nav-state-${s.name.replace(/\s/g, '-').toLowerCase()}`}
          onClick={() => this.props.closeAllMobileMenu()}
          to={`/state/${s.name.replace(/\s/g, '-').toLowerCase()}/`}
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
            <div
              style={{marginLeft: '1rem'}}
              className="sbtci-button"
              onClick={() => {this.props.toggleEmailSubscribe();}}
            >
              Subscribe
            </div>
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
            <a
              className="sbtci-header-nav-category"
              href="/Tax Foundation SBTCI 2019.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Full Study
            </a>
          </nav>

          <div className="sbtci-header-menu">
            <Link
              to="/"
              className="sbtci-header-mobile-title"
            >
              State Business<br/>Tax Climate Index
            </Link>
            <div
              className="sbtci-header-mobile-menu-toggle"
              onClick={() => this.props.toggleMobileMenu('menuOpen')}
              role="button"
              aria-pressed={this.props.menuOpen}
            >
              Menu
            </div>
          </div>
          <div
            className={
              this.props.menuOpen
                ? 'sbtci-header-mobile-nav sbtci-header-mobile-nav--active'
                : 'sbtci-header-mobile-nav sbtci-header-mobile-nav--inactive'
            }
          >
            <div
              className="sbtci-header-mobile-nav-top-bar"
              onClick={() => this.props.closeAllMobileMenu()}
              role="button"
            >
              Close Menu
            </div>
            <div className="sbtci-header-mobile-nav-top-level-item">
              <div 
                className="sbtci-header-mobile-nav-top-link"
                onClick={() => this.props.toggleMobileMenu('rankingsMenuOpen')}
              >
                Rankings
              </div>
              <div
                className={
                  this.props.rankingsMenuOpen
                    ? 'sbtci-header-mobile-nav-rankings sbtci-header-mobile-nav-rankings--active'
                    : 'sbtci-header-mobile-nav-rankings sbtci-header-mobile-nav-rankings--inactive'
                }
              >
                { taxTypeLinks }
              </div>
            </div>
            <div className="sbtci-header-mobile-nav-top-level-item">
              <div 
                className="sbtci-header-mobile-nav-top-link"
                onClick={() => this.props.toggleMobileMenu('statesMenuOpen')}
              >
                States
              </div>
              <div
                className={
                  this.props.statesMenuOpen
                    ? 'sbtci-header-mobile-nav-states sbtci-header-mobile-nav-states--active'
                    : 'sbtci-header-mobile-nav-states sbtci-header-mobile-nav-states--inactive'
                }
              >
                { stateLinks }
              </div>
            </div>
            <div className="sbtci-header-mobile-nav-top-level-item">
              <a
                className="sbtci-header-mobile-nav-top-link"
                href="https://files.taxfoundation.org/20180925174436/2019-State-Business-Tax-Climate-Index.pdf"
                onClick={() => this.props.closeAllMobileMenu()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Full Study
              </a>
            </div>
            <div className="sbtci-header-mobile-nav-top-level-item">
              <div
                className="sbtci-header-mobile-nav-top-link"
                onClick={() => this.props.toggleMobileMenu('shareMenuOpen')}
              >Share</div>
              <div
                className={
                  this.props.shareMenuOpen
                    ? 'sbtci-header-mobile-nav-states sbtci-header-mobile-nav-states--active'
                    : 'sbtci-header-mobile-nav-states sbtci-header-mobile-nav-states--inactive'
                }
              >
                <IconFacebook className="sbtci-header-mobile-share" fill="#3b5998" text="Facebook" />
                <IconTwitter className="sbtci-header-mobile-share" fill="#00b6f1" text="Twitter" />
              </div>
            </div>
            <div
              className="sbtci-header-mobile-nav-top-level-item"
              onClick={() => {this.props.toggleEmailSubscribe();}}
            >
              <div className="sbtci-header-mobile-nav-top-link">Subscribe</div>
            </div>
            <div
              className="sbtci-header-mobile-nav-top-level-item"
              onClick={() => {this.props.closeAllMobileMenu();}}
            >
              <Link to="/contribute/" className="sbtci-header-mobile-nav-top-link">Contribute</Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
