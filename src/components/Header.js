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
          <a
            href={`https://twitter.com/intent/tweet?text=${window.location.href}`}
            className="sbtci-header-social-icon">
            <IconTwitter fill="#ffffff" />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
            className="sbtci-header-social-icon">
            <IconFacebook fill="#ffffff" />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}
            className="sbtci-header-social-icon">
            <IconLinkedIn fill="#ffffff" />
          </a>
          <a href="" className="sbtci-header-social-icon">
            <IconEmail fill="#ffffff" />
          </a>
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
