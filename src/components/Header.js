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
  grid-template-columns: 465px 1fr;
  grid-template-areas: 'title menu';
  margin: 0 auto;
  max-width: 960px;

  @media screen and (min-width: ${props => props.theme.tabletWidth}) {
    align-items: end;
    grid-template-areas:
      'logo social'
      'logo nav';
  }
`;

const HeaderLogo = styled.img`
  display: none;
  @media screen and (min-width: ${props => props.theme.tabletWidth}) {
    display: block;
    grid-area: logo;
    height: 130px;
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
    display: grid;
    grid-area: nav;
    justify-content: right;
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledHeader>
        <HeaderContainer>
          <HeaderLogo src={Logo} />
          <SocialLinks>stuff</SocialLinks>
          <NavLinks>things</NavLinks>
        </HeaderContainer>
      </StyledHeader>
    );
  }
}

export default Header;
