import React, { Component } from 'react';

class USState extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h1>State {this.state.stateName}</h1>
        <p>A place.</p>
      </div>
    );
  }
}

export default USState;
