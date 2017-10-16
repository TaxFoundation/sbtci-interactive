import React, { Component } from 'react';
import { setCookie, getCookie } from './Helpers';

class PopIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    };

    this.timer;

    this.togglePopIn = this.togglePopIn.bind(this);
  }

  componentDidMount() {
    const dismissed = JSON.parse(getCookie('sbtci-dismissed')) || false;
    if (!dismissed && !this.state.active) {
      this.timer = setTimeout(() => {
        this.togglePopIn();
      }, this.props.timeout);
    }
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({active: nextProps.active});
    clearTimeout(this.timer);
  }

  togglePopIn() {
    const newState = {...this.state};
    newState.active = !newState.active;
    this.setState(newState);
    setCookie('sbtci-dismissed', true, 7);
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
          {React.cloneElement(this.props.children, {onSuccess: this.togglePopIn})}
        </div>
      </div>
    );
  }
}

export default PopIn;