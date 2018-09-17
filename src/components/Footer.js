import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import { FooterLogo } from './Images';

const Footer = styled.footer`
  background-color: #eeeeee;
  color: #666666;
`;

const Info = styled.div`
  display: grid;
  grid-template: auto / 1fr 1fr;
  padding: 2rem 0;

  @media only screen and (min-width: 0) and (max-width: ${props =>
      props.theme.tabletWidth - 1}px) {
    display: block;
    padding: 1rem 1rem 0;
  }
`;

const InfoSection = styled.div`
  grid-column: span 1;
  grid-row: span 1;

  @media only screen and (min-width: 0) and (max-width: ${props =>
      props.theme.tabletWidth - 1}px) {
    margin-bottom: 1rem;
  }

  a {
    color: ${props => props.theme.tfBlue};
    text-decoration: none;

    &:active,
    &:visited {
      color: ${props => props.theme.tfBlue};
    }

    &:hover {
      color: ${props => props.theme.sbtciBlue};
    }
  }
`;

const FooterLinks = styled.div`
  background-color: #dddddd;
  font-size: 0.8rem;
  margin-top: 1rem;

  ul {
    list-style: none;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
  }

  li {
    @media only screen and (min-width: 0) and (max-width: ${props =>
        props.theme.tabletWidth - 1}px) {
      margin: 0 0 1rem;
    }

    @media only all and (min-width: ${props => props.theme.tabletWidth}px) {
      display: inline-block;
      padding: 0 0.5rem 0 0;

      &::after {
        content: '|';
        margin-left: 0.5rem;
      }

      &:last-child {
        &::after {
          content: '';
          margin-left: 0;
        }
      }
    }
  }

  a {
    color: #666666;
    text-decoration: none;
  }
`;

const theFooter = props => {
  return (
    <Footer>
      <Container>
        <Info>
          <InfoSection>
            <a
              style={{ display: 'inline-block' }}
              href="https://taxfoundation.org"
            >
              <FooterLogo />
            </a>
            <p style={{ margin: '0.2rem 0 0 2.4rem' }}>
              1325 G St NW
              <br />
              Suite 950
              <br />
              Washington, DC 20005
            </p>
          </InfoSection>
          <InfoSection>
            <p style={{ margin: '0' }}>
              The <a href="https://taxfoundation.org">Tax Foundation</a> is the
              nation’s leading independent tax policy research organization.
              Since 1937, our principled research, insightful analysis, and
              engaged experts have informed smarter tax policy at the federal,
              state, and local levels. We improve lives through tax policy
              research and education that leads to greater economic growth and
              opportunity.
            </p>
          </InfoSection>
        </Info>
      </Container>
      <FooterLinks>
        <Container>
          <ul>
            <li>Copyright 2017 Tax Foundation</li>
            <li>
              <a href="https://www.facebook.com/taxfoundation">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/taxfoundation">Twitter</a>
            </li>
            <li>
              <a href="https://taxfoundation.org/privacy-policy/">
                Privacy Policy
              </a>
            </li>
          </ul>
        </Container>
      </FooterLinks>
    </Footer>
  );
};

export default theFooter;
