import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from './Container';
import { IconTwitter, IconFacebook, IconLinkedIn } from './SocialIcons';
import Logo from '../images/logo.svg';

const StyledHeader = styled.header`
  background-color: ${props => props.theme.tfBlue};
  color: #fff;
  width: 100%;
`;

const HeaderContainer = styled.div`
  display: grid;
  grid-template-rows: 100px 60px;
  grid-template-columns: 360px 1fr;
  grid-template-areas: 'title menu';
  margin: 0 auto;
  max-width: 960px;
  position: relative;

  @media screen and (min-width: ${props => props.theme.tabletWidth}) {
    align-items: end;
    grid-template-areas:
      'logo social'
      'logo nav';
  }
`;

const HeaderLogo = styled(Link)`
  display: none;
  @media screen and (min-width: ${props => props.theme.tabletWidth}) {
    align-items: end;
    display: grid;
    grid-area: logo;

    img {
      height: 130px;
    }
  }
`;

const SocialLinks = styled.div`
  display: none;
  @media screen and (min-width: ${props => props.theme.tabletWidth}) {
    display: grid;
    grid-area: social;
    justify-content: right;
  }
`;

const NavLinks = styled.nav`
  display: none;
  @media screen and (min-width: ${props => props.theme.tabletWidth}) {
    align-content: end;
    display: grid;
    grid-area: nav;
    grid-auto-flow: column;
    justify-content: right;
  }
`;

const NavLink = styled.div`
  color: #ffffff;
  padding: 10px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;

  &:active,
  &:hover {
    background-color: ${props => props.theme.sbtciBlue};
  }
`;

const SubNavLinks = styled.div`
  background-color: #fff;
  display: ${props => (props.active ? 'block' : 'none')};
  max-width: 960px;
  position: fixed;
  top: 160px;
  width: 100%;
`;

const SubNavLink = styled(Link)`
  color: ${props => props.theme.tfBlue};
  display: block;
  padding: 0.5rem;
  text-align: left;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.sbtciBlue};
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openMenu: null,
    };
  }

  toggleMenu = type => {
    if (type !== null) {
      if (this.state.openMenu === type) {
        this.setState({ openMenu: null });
      } else {
        this.setState({ openMenu: type });
      }
    } else {
      this.setState({ openMenu: null });
    }
  };

  render() {
    const RankingsLinks = this.props.taxTypes.map(t => {
      let r = `/tax/${t.id}/`;
      if (t.id === 'total') {
        r = '/';
      }
      return (
        <Link
          className="sbtci-header-nav-link"
          key={`nav-tax-${t.id}`}
          onClick={() => this.toggleMenu(null)}
          to={r}
        >
          {t.name}
        </Link>
      );
    });

    const StateLinks = this.props.USStates.map(s => {
      return (
        <SubNavLink
          key={`nav-state-${s.name.replace(/\s/g, '-').toLowerCase()}`}
          onClick={() => this.toggleMenu(null)}
          to={`/state/${s.name.replace(/\s/g, '-').toLowerCase()}/`}
        >
          {s.name}
        </SubNavLink>
      );
    });

    return (
      <StyledHeader>
        <HeaderContainer>
          <HeaderLogo to="/">
            <img src={Logo} alt="State Business Tax Climate Index" />
          </HeaderLogo>
          <SocialLinks>stuff</SocialLinks>
          <NavLinks>
            <NavLink onClick={() => this.toggleMenu('rankings')}>
              <p>Rankings</p>
            </NavLink>
            <NavLink onClick={() => this.toggleMenu('states')}>
              <p>States</p>
            </NavLink>
            <NavLink>
              <p>Methodology</p>
            </NavLink>
          </NavLinks>
          <SubNavLinks active={this.state.openMenu === 'rankings'}>
            {RankingsLinks}
          </SubNavLinks>
          <SubNavLinks active={this.state.openMenu === 'states'}>
            {StateLinks}
          </SubNavLinks>
        </HeaderContainer>
      </StyledHeader>
    );
  }
}

export default Header;
