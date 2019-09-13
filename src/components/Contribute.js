import React, { Component } from 'react';
import Metadata from './Metadata';
import { TaxImages } from './Images';

class Contribute extends Component {
  render() {
    const bgImage = {
      backgroundImage: `url(${TaxImages['donate']})`
    };

    return (
      <div>
        <Metadata
          title="Support Our Work - State Business Tax Climate Index | Tax Foundation"
          description="It's due to the generosity of people like you that we're able to make the sometimes tricky topic of tax policy fun and accessible."
          location={ this.props.location.pathname }
          image={TaxImages['donate']}
        />
        <div
          className="sbtci-contribute-header"
          style={bgImage}
        >
          <h1>
            Support Our Work
          </h1>
        </div>
        <div className="container">
          <div className="sbtci-contribute">
            <div className="sbtci-contribute-text">
              <p>Have you found our <em>State Business Tax Climate Index</em> useful? If so, consider offering your support.</p>
              <p>It's due to the generosity of people like you that we're able to make the sometimes tricky topic of tax policy fun and accessible.</p>
              <p>Help us continue this work and more by making a small contribution by filling out the form on this page.</p>
            </div>
            <iframe height="1077" title="Donate" allowtransparency="true" frameborder="0" scrolling="no" style={{width: '100%', border: 'none'}} src="https://taxfoundation.wufoo.com/embed/m1fh471e0nk0j4e/">
              <a class="sbtci-button" href="https://taxfoundation.wufoo.com/forms/m1fh471e0nk0j4e/">
                Donate to the Tax Foundation
              </a>
            </iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Contribute;
