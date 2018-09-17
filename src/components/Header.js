import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from './Container';
import { IconTwitter, IconFacebook, IconLinkedIn } from './SocialIcons';
import Logo from '../images/logo.svg';

const HeaderContainer = styled(Container)`
  align-items: end;
  display: block;
  position: relative;

  @media only all and (min-width: ${props => props.theme.tabletWidth}) {
    display: grid;
    grid-template: auto 70px / 1fr 1fr;
  }

  @media print {
    background-color: ${props => props.theme.tfBlue} !important;
    -webkit-print-color-adjust: exact;
    grid-template: 160px / auto;
  }
`;

const HeaderLogo = styled(Link)`
  display: none;

  @media only all and (min-width: ${props => props.theme.tabletWidth}) {
    display: grid;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    grid-template: 160px / auto;

    img {
      align-self: end;
      max-height: 130px;
      width: 100%;
    }
  }

  @media print {
    display: grid;
    grid-column: span 1;
    grid-row: span 1;
    height: 160px;
    margin: 0 auto;

    img {
      align-self: end;
      max-height: 130px;
      width: 100%;
    }
  }
`;

const HeaderSocial = styled.div`
  display: none;

  @media only all and (min-width: ${props => props.theme.tabletWidth}) {
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-content: flex-end;
    text-align: right;

    &-icon {
      display: block;
      padding: 0 10px;
    }

    svg {
      width: 24px;
    }
  }

  @media print {
    display: none;
  }
`;

const HeaderNav = styled.nav`
  @media only all and (min-width: ${props => props.theme.mobileWidth}) {
    display: none;
  }

  @media only all and (min-width: ${props => props.theme.tabletWidth}) {
    display: block;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    justify-items: end;
    text-align: right;
  }

  @media print {
    display: none;
  }
`;

const HeaderNavCategory = styled(Link)`
  @media only all and (max-width: ${props => props.theme.tabletWidth}) {
    background-color: #f6f6f6;
    border-top: 1px solid ${props => props.theme.lightGray};
    color: #333333;
    display: block;
    padding: 0.8rem 1rem 0.8rem 1.5rem;
    text-decoration: none;
  }

  @media only all and (min-width: ${props => props.theme.tabletWidth}) {
    display: inline-block;
    padding: 24px 10px 20px;
    text-decoration: none;

    &:hover > .sbtci-header-rankings-nav {
      display: flex;
    }

    &:hover > .sbtci-header-states-nav {
      display: block;
    }
  }
`;

const HeaderNavLink = styled(HeaderNavCategory)`
  @media only all and (min-width: ${props => props.theme.tabletWidth}) {
    text-transform: none;
  }
`;

const MobileNav = styled.nav`
  background-color: #ffffff;
  display: none;
  z-index: 1000;

  @media only all and (min-width: ${props => props.theme.tabletWidth}) {
    display: block;
    height: 100vh;
    left: ${props => (props.active ? 0 : '-100vw')}
    position: fixed;
    overflow-y: scroll;
    transition: left 250ms ease-in-out;
    top: 0;
    width: 100vw;
  }

  &-top-bar {
    background-color: ${props => props.theme.tfBlue};
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 1rem;
    text-align: right;
  }

  &-top-level-item {
    border-bottom: 1px solid ${props => props.theme.lightGray};
  }

  &-top-link {
    color: #333333;
    display: block;
    font-size: 1.2rem;
    padding: 0.8rem 1rem;
    text-decoration: none;

    &:active,
    &:hover,
    &:visited {
      color: #333333;
    }
  }

  &-rankings,
  &-states {
    display: block;
    overflow: hidden;
    transition: max-height 200ms ease-in-out;

    &--inactive {
      max-height: 0;
    }
  }

  &-rankings--active {
    max-height: 45rem;
  }

  &-states--active {
    max-height: 150rem;
  }
`;

const StyledHeader = styled.header`
  background-color: ${props => props.theme.tfBlue};

  @media only all and (min-width: ${props => props.theme.tabletWidth}) {
    height: 160px;
  }

  // mobile navigation
  @media only all and (max-width: ${props => props.theme.tabletWidth}) {
    &-menu {
      align-items: center;
      color: #ffffff;
      display: flex;
      font-size: 1rem;
      font-weight: 700;
      justify-content: space-between;
      padding: 1rem 0;
      text-align: right;
    }

    &-mobile-title {
      color: #ffffff;
      display: block;
      text-align: left;
      text-decoration: none;
    }

    &-mobile-menu-toggle {
      border: 1px solid #ffffff;
      border-radius: ${props => props.theme.radius};
      display: block;
      padding: 0.5rem;
    }

    &-nav-link {
    }

    &-rankings-nav,
    &-states-nav {
      display: none;
    }

    &-mobile-share {
      align-items: center;
      border-top: 1px solid ${props => props.theme.lightGray};
      color: #333333;
      display: flex;
      padding: 1rem 0 1rem 2rem;
      text-decoration: none;

      svg {
        height: 25px;
        padding-right: 1rem;
        width: 25px;
      }
    }
  }

  // desktop navigation
  @media only all and (min-width: ${props => props.theme.tabletWidth}) {
    &-menu {
      display: none;
    }

    &-nav-category,
      display: inline-block;
      padding: 24px 10px 20px;
      text-decoration: none;

      &:hover > .sbtci-header-rankings-nav {
        display: flex;
      }

      &:hover > .sbtci-header-states-nav {
        display: block;
      }
    }

    &-nav-category {
      color: #ffffff;
      text-transform: uppercase;

      &:active,
      &:hover {
        background-color: $sbtci-blue;
      }
    }

    &-rankings-nav,
    &-states-nav {
      align-items: center;
      background-color: #ffffff;
      box-shadow: 0 2px 2px $dark-gray;
      display: none;
      justify-content: space-around;
      padding: 0.5rem;
      position: absolute;
      right: 0%;
      top: 100%;
      width: 100%;

      a {
        color: ${props => props.theme.tfBlue};
        display: block;
        padding: 0.5rem;
        text-align: left;
        text-decoration: none;

        &:hover {
          color: $sbtci-blue;
        }
      }
    }

    &-states-nav {
      column-count: 5;
      column-gap: 1rem;

      a {
        display: inline-block;
        width: calc(100% - 1rem);
      }
    }
  }

  @media print {
    &-menu,
    nav {
      display: none;
    }
  }
`;

class Header extends Component {
  render() {
    const taxTypeLinks = this.props.taxTypes.map(t => {
      let r = `/tax/${t.id}/`;
      if (t.id === 'total') {
        r = '/';
      }
      return (
        <HeaderNavLink
          key={`nav-tax-${t.id}`}
          onClick={() => this.props.closeAllMobileMenu()}
          to={r}
        >
          {t.name}
        </HeaderNavLink>
      );
    });

    const stateLinks = this.props.USStates.map(s => {
      return (
        <HeaderNavLink
          key={`nav-state-${s.name.replace(/\s/g, '-').toLowerCase()}`}
          onClick={() => this.props.closeAllMobileMenu()}
          to={`/state/${s.name.replace(/\s/g, '-').toLowerCase()}/`}
        >
          {s.name}
        </HeaderNavLink>
      );
    });

    return (
      <StyledHeader>
        <HeaderContainer>
          <HeaderLogo to="/">
            <img src={Logo} alt="State Business Tax Climate Index" />
          </HeaderLogo>
          <HeaderSocial>
            <IconTwitter className="sbtci-header-social-icon" fill="#ffffff" />
            <IconFacebook className="sbtci-header-social-icon" fill="#ffffff" />
            <IconLinkedIn className="sbtci-header-social-icon" fill="#ffffff" />
            <div
              style={{ marginLeft: '1rem' }}
              className="sbtci-button"
              onClick={() => {
                this.props.toggleEmailSubscribe();
              }}
            >
              Subscribe
            </div>
          </HeaderSocial>
          <HeaderNav>
            <div className="sbtci-header-nav-category" to="/">
              Rankings
              <nav className="sbtci-header-rankings-nav">{taxTypeLinks}</nav>
            </div>
            <div className="sbtci-header-nav-category" to="/">
              States
              <nav className="sbtci-header-states-nav">{stateLinks}</nav>
            </div>
            <a
              className="sbtci-header-nav-category"
              href="https://files.taxfoundation.org/20171016171625/SBTCI_2018.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Methodology
            </a>
          </HeaderNav>

          <div className="sbtci-header-menu">
            <Link to="/" className="sbtci-header-mobile-title">
              State Business
              <br />
              Tax Climate Index
            </Link>
            <div
              className="sbtci-header-mobile-menu-toggle"
              onClick={() => this.props.toggleMobileMenu('menuOpen')}
            >
              Menu
            </div>
          </div>
          <MobileNav active={this.props.menuOpen}>
            <div
              className="sbtci-header-mobile-nav-top-bar"
              onClick={() => this.props.closeAllMobileMenu()}
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
                {taxTypeLinks}
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
                {stateLinks}
              </div>
            </div>
            <div className="sbtci-header-mobile-nav-top-level-item">
              <a
                className="sbtci-header-mobile-nav-top-link"
                href="https://files.taxfoundation.org/20171016171625/SBTCI_2018.pdf"
                onClick={() => this.props.closeAllMobileMenu()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Methodology
              </a>
            </div>
            <div className="sbtci-header-mobile-nav-top-level-item">
              <div
                className="sbtci-header-mobile-nav-top-link"
                onClick={() => this.props.toggleMobileMenu('shareMenuOpen')}
              >
                Share
              </div>
              <div
                className={
                  this.props.shareMenuOpen
                    ? 'sbtci-header-mobile-nav-states sbtci-header-mobile-nav-states--active'
                    : 'sbtci-header-mobile-nav-states sbtci-header-mobile-nav-states--inactive'
                }
              >
                <IconFacebook
                  className="sbtci-header-mobile-share"
                  fill="#3b5998"
                  text="Facebook"
                />
                <IconTwitter
                  className="sbtci-header-mobile-share"
                  fill="#00b6f1"
                  text="Twitter"
                />
              </div>
            </div>
            <div
              className="sbtci-header-mobile-nav-top-level-item"
              onClick={() => {
                this.props.toggleEmailSubscribe();
              }}
            >
              <div className="sbtci-header-mobile-nav-top-link">Subscribe</div>
            </div>
            <div
              className="sbtci-header-mobile-nav-top-level-item"
              onClick={() => {
                this.props.closeAllMobileMenu();
              }}
            >
              <Link
                to="/contribute/"
                className="sbtci-header-mobile-nav-top-link"
              >
                Contribute
              </Link>
            </div>
          </MobileNav>
        </HeaderContainer>
      </StyledHeader>
    );
  }
}

export default Header;
