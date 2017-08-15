import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
          <h1>{this.state.name}</h1>
        </div>
        <div className="sbtci-state-content">
          <div className="sbtci-box">
            <h2 className="sbtci-box-heading">Dummy Box Content</h2>
            <p>Blah blah blah</p>
            <Link to="/" className="sbtci-box-footer">See More Dummy Content</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default USState;
