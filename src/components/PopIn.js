import React, { Component } from 'react';
import { setCookie, getCookie } from './Helpers';

class PopIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };

    this.togglePopIn = this.togglePopIn.bind(this);
  }

  componentDidMount() {
    const dismissed = JSON.parse(getCookie('dismissed')) || false;
    if (!dismissed) {
      setTimeout(() => {
        this.togglePopIn();
      }, this.props.timeout);
    }
  }
  

  togglePopIn() {
    const newState = {...this.state};
    newState.active = !newState.active;
    this.setState(newState);
    setCookie('dismissed', true, 7);
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
          <div
            className="sbtci-pop-in-dismiss"
            onClick={() => this.togglePopIn()}
          >
            &otimes;
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default PopIn;