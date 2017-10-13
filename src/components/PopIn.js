import React, { Component } from 'react';

class PopIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };

    this.togglePopIn = this.togglePopIn.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.togglePopIn();
    }, this.props.timeout);
  }

  togglePopIn() {
    const newState = {...this.state};
    newState.active = !newState.active;
    this.setState(newState);
  }

  render() {
    return (
      <div
        className={
          this.state.active
            ? 'sbtci-pop-in sbtci-pop-in--active'
            : 'sbtci-pop-in sbtci-pop-in--inactive'
        }
      >
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default PopIn;