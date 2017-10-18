import React, { Component } from 'react';
import Metadata from './Metadata';
import { TaxImages } from './Images';

class Contribute extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bgImage = {
      backgroundImage: `url(${TaxImages['donate']})`
    };
  
    const qgiv = (w, d, s, id) => {
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://secure.qgiv.com/resources/core/js/embed.js";
      fjs.parentNode.insertBefore(js, fjs);
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
            <div className="sbtci-contribute-form">
              <div className="qgiv-embed-container" data-qgiv-embed="true" data-embed-id="49350" data-embed="https://secure.qgiv.com/for/sid/embed/49350/" data-width="300"></div>
              {qgiv(window, document, 'script', 'qgiv-embedjs')}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contribute;
