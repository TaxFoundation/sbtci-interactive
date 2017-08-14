import React, { Component } from 'react';

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

        </div>
      </div>
    );
  }
}

export default USState;
