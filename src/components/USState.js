import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import USStateTable from './USStateTable';

class USState extends Component {
  constructor(props) {
    super(props);
    this.state = props.stateData;
  }

  render() {
    return (
      <div className="sbtci-state">
        <div
          className="sbtci-state-header"
        >
          <h1>#{this.state.total.rank} {this.state.name}</h1>
        </div>
        <div className="sbtci-state-content container">
          <div className="sbtci-box sbtci-state-table">
            <USStateTable stateData={this.state} />
          </div>
          <div className="sbtci-state-social sbtci-box">
            <h2>Spread the Word!</h2>
            <p>How does your state rank? Brag (or complain) to your friends!</p>
          </div>
          <div className="sbtci-state-neighbors sbtci-box">
            <h2 className="sbtci-box-heading">Neighboring States</h2>
            <div>Placeholder</div>
            <Link to="/" className="sbtci-box-footer">See Full Map</Link>
          </div>
          <div className="sbtci-state-top sbtci-box">
            <h2 className="sbtci-box-heading">Top States</h2>
            <div>Placeholder</div>
            <Link to="/" className="sbtci-box-footer">See Rankings</Link>
          </div>
          <div className="sbtci-state-bottom sbtci-box">
            <h2 className="sbtci-box-heading">Bottom States</h2>
            <div>Placeholder</div>
            <Link to="/" className="sbtci-box-footer">See Rankings</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default USState;
