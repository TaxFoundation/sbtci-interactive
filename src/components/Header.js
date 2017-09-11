import React from 'react';
import { Link } from 'react-router-dom';
import { IconTwitter, IconFacebook, IconLinkedIn, IconEmail } from './SocialIcons';
import Logo from '../images/logo.svg';

const Header = () => {
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
      </div>
    </header>
  );
}

export default Header;
