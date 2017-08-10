import React, { Component } from 'react';

class USState extends Component {
  constructor(props) {
    super(props);
    this.state = props.stateData;
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>A place.</p>
      </div>
    );
  }
}

export default USState;
