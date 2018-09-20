import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Button } from './Button';
import Container from './Container';
import { IconTwitter, IconFacebook, IconLinkedIn } from './SocialIcons';
import Logo from '../images/logo.svg';

const StyledHeader = styled.header`
  background-color: ${props => props.theme.tfBlue};
  color: #fff;
  width: 100%;
`;

const HeaderContainer = styled(Container)`
  display: grid;
  grid-template-areas: 'title menu';
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  position: relative;

  @media screen and (min-width: ${props => props.theme.tabletWidth}) {
    align-content: center;
    align-items: end;
    grid-template-areas:
      'logo social'
      'logo nav';
    grid-template-rows: 90px 70px;
    grid-template-columns: 360px 1fr;
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
    align-items: center;
    display: grid;
    grid-area: social;
    grid-auto-flow: column;
    grid-gap: 1rem;
    justify-content: right;
    padding-right: 10px;

    a {
      align-items: center;
      display: grid;
    }

    svg {
      width: 24px;
    }
  }
`;

const NavLinks = styled.nav`
  display: none;
  @media screen and (min-width: ${props => props.theme.tabletWidth}) {
    align-content: end;
    cursor: pointer;
    display: grid;
    grid-area: nav;
    grid-auto-flow: column;
    justify-content: right;
  }
`;

const NavLinkStyles = css`
  color: #ffffff;
  padding: 15px 10px;
  text-decoration: none;
  text-transform: uppercase;

  &:active,
  &:hover {
    background-color: ${props => props.theme.sbtciSecondary};
  }
`;

const NavSection = styled.div`
  ${NavLinkStyles};
`;

const NavLink = styled(Link)`
  ${NavLinkStyles};
`;

const SubNavLinks = styled.div`
  align-items: center;
  box-shadow: 0 2px 2px ${props => props.theme.darkGray};
  padding: 0.5rem;
  background-color: #fff;
  max-width: 960px;
  position: absolute;
  right: 0%;
  top: 100%;
  width: 100%;
  z-index: 1000;
`;

const RankingsLinks = styled(SubNavLinks)`
  display: ${props => (props.active ? 'grid' : 'none')};
  grid-gap: 1rem;
  justify-content: space-around;
`;

const StatesLinks = styled(SubNavLinks)`
  display: ${props => (props.active ? 'block' : 'none')};
  column-count: 5;
  column-gap: 1rem;
`;

const SubNavLink = styled(Link)`
  color: ${props => props.theme.sbtciPrimary};
  display: block;
  padding: 0.5rem;
  text-align: left;
  text-decoration: none;
  text-transform: none;

  &:hover {
    color: ${props => props.theme.sbtciSecondary};
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
    const RankingLinks = this.props.taxTypes.map(t => {
      let r = `/tax/${t.id}/`;
      if (t.id === 'total') {
        r = '/';
      }
      return (
        <SubNavLink
          key={`nav-tax-${t.id}`}
          onClick={() => this.toggleMenu(null)}
          to={r}
        >
          {t.name}
        </SubNavLink>
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
          <SocialLinks>
            <IconTwitter fill="#ffffff" />
            <IconFacebook fill="#ffffff" />
            <IconLinkedIn fill="#ffffff" />
            <Button
              onClick={() => {
                this.props.toggleEmailSubscribe();
              }}
            >
              Subscribe
            </Button>
          </SocialLinks>
          <NavLinks>
            <NavSection
              onMouseEnter={() => this.toggleMenu('rankings')}
              onMouseLeave={() => this.toggleMenu(null)}
            >
              Rankings
              <RankingsLinks
                active={this.state.openMenu === 'rankings'}
                style={{ gridAutoFlow: 'column' }}
              >
                {RankingLinks}
              </RankingsLinks>
            </NavSection>
            <NavSection
              onMouseEnter={() => this.toggleMenu('states')}
              onMouseLeave={() => this.toggleMenu(null)}
            >
              States
              <StatesLinks
                active={this.state.openMenu === 'states'}
                style={{ columnCount: 5, columnGap: '1rem' }}
              >
                {StateLinks}
              </StatesLinks>
            </NavSection>
            <NavLink to={this.props.methodology}>Methodology</NavLink>
          </NavLinks>
        </HeaderContainer>
      </StyledHeader>
    );
  }
}

export default Header;
