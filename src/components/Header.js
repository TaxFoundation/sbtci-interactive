import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Button } from './Button';
import Container from './Container';
import { IconTwitter, IconFacebook, IconLinkedIn } from './SocialIcons';
import Logo from '../images/logo.svg';

const StyledHeader = styled.header`
  background-color: ${props => props.theme.sbtciPrimary};
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
        </HeaderContainer>
      </StyledHeader>
    );
  }
}

export default Header;
