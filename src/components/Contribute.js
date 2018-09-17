import React, { Component } from 'react';
import styled from 'styled-components';
import Metadata from './Metadata';
import { TaxImages } from './Images';

const Header = styled.div`
  align-items: center;
  background-color: ${props => props.theme.tfBlue};
  background-image: url(${TaxImages['donate']});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  height: 200px;
  width: 100%;

  @include print-only {
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

    @include mobile-only {
      font-size: 2rem;
    }

    @include print-only {
      color: #000000;
    }
  }
`;

const Text = styled.div`
  margin: 1rem auto 2rem;
  max-width: 600px;
`;

const IFrame = styled.iframe`
  min-height: 350px;

  .qgiv-embed-container {
    max-width: 600px !important;
  }
`;

class Contribute extends Component {
  render() {
    const bgImage = {
      backgroundImage: ``,
    };

    const qgiv = (w, d, s, id) => {
      let js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://secure.qgiv.com/resources/core/js/embed.js';
      fjs.parentNode.insertBefore(js, fjs);
    };

    return (
      <div>
        <Metadata
          title="Support Our Work - State Business Tax Climate Index | Tax Foundation"
          description="It's due to the generosity of people like you that we're able to make the sometimes tricky topic of tax policy fun and accessible."
          location={this.props.location.pathname}
          image={TaxImages['donate']}
        />
        <Header style={bgImage}>
          <h1>Support Our Work</h1>
        </Header>
        <div className="container">
          <Text>
            <p>
              Have you found our <em>State Business Tax Climate Index</em>{' '}
              useful? If so, consider offering your support.
            </p>
            <p>
              It's due to the generosity of people like you that we're able to
              make the sometimes tricky topic of tax policy fun and accessible.
            </p>
            <p>
              Help us continue this work and more by making a small contribution
              by filling out the form on this page.
            </p>
          </Text>
          <IFrame>
            <div
              className="qgiv-embed-container"
              data-qgiv-embed="true"
              data-embed-id="49350"
              data-embed="https://secure.qgiv.com/for/sid/embed/49350/"
              data-width="300"
            >
              {qgiv(window, document, 'script', 'qgiv-embedjs')}
            </div>
          </IFrame>
        </div>
      </div>
    );
  }
}

export default Contribute;
