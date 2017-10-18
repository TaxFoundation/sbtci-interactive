import React, { Component } from 'react';
import { setCookie, getCookie } from './Helpers';

class PopIn extends Component {
  constructor(props) {
    super(props);
    this.timer;
    this.dismissed = JSON.parse(getCookie('sbtci-dismissed')) || false;

    this.dismissPopIn = this.dismissPopIn.bind(this);
  }

  componentDidMount() {
    if (!this.dismissed && !this.props.active) {
      this.timer = setTimeout(() => {
        this.props.toggle();
      }, this.props.timeout);
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.active) {
      clearTimeout(this.timer);
    }
  }
  
  dismissPopIn() {
    this.props.toggle();
    setCookie('sbtci-dismissed', true, 7);
  }

  render() {
    return (
      <div
        className={
          this.props.active
            ? 'sbtci-pop-in sbtci-pop-in--active'
            : 'sbtci-pop-in sbtci-pop-in--inactive'
        }
      >
        <div className="container">
          <div
            className="sbtci-pop-in-dismiss"
            onClick={() => {
              this.dismissPopIn();
            }}
          >
            &otimes;
          </div>
          {React.cloneElement(this.props.children, {onSuccess: this.dismissPopIn})}
        </div>
      </div>
    );
  }
}

export default PopIn;