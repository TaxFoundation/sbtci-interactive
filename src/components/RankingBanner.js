import React from 'react';
import styled from 'styled-components';

const Banner = styled.div`
  align-items: center;
  background-color: ${props => props.color};
  background-image: ${props => props.bg};
  background-position: center;
  background-size: cover;
  background-blend-mode: overlay;
  display: flex;
  justify-content: center;
  height: 128px;
  width: 100%;

  @media print {
    background-color: #ffffff;
    height: 6rem;
  }

  h1 {
    background-color: rgba(0, 0, 0, 0.5);
    color: #ffffff;
    display: block;
    font-family: 'Oswald', sans-serif;
    font-size: 3rem;
    font-weight: 400;
    margin: 0;
    padding: 1rem 1.6rem;
    text-align: center;

    @media screen and (max-width: ${props => props.theme.tabletWidth}) {
      font-size: 2rem;
    }

    @media print {
      color: #000000;
    }
  }
`;

const RankingBanner = props => (
  <Banner {...props}>
    <h1>{props.name}</h1>
  </Banner>
);

export default RankingBanner;
