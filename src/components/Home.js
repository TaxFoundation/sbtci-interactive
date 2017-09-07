import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import USMap from './USMap';
import { IconTwitter, IconFacebook, IconLinkedIn, IconEmail } from './SocialIcons';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUSState: {}
    }

    this.updateActiveState = this.updateActiveState.bind(this);
  }

  updateActiveState(stateId) {
    const newActiveState = this.props.SBTCIData.filter((USState) => {
      return USState.id === stateId;
    })[0];
    this.setState({ activeUSState: newActiveState});
  }

  render() {
    const domain = 'localhost'; //TODO update with actual domain when known

    return (
      <div className="sbtci-home">
        <nav className="sbtci-home-tax-nav container">
          {this.props.taxTypes.map((t) => {
            let r = `/tax/${t.id}`;
            let style = {
              borderBottom: `3px solid ${t.hex}`
            }
            if (t.id === 'total') { r = '/'; }
            if (t.id === this.props.activeTax) {
              style.backgroundColor = 'rgba(95, 194, 255, 0.3)'
            }
            return <Link
              className="sbtci-home-tax-nav-item"
              style={style}
              to={r}
            >{t.name}</Link>;
          })}
        </nav>
        <div className="sbtci-home-map-section container">
          <div className="sbtci-home-map">
            <USMap
              USData={this.props.USData}
              SBTCIData={this.props.SBTCIData}
              updateActiveState={this.updateActiveState}
              activeTax={this.props.activeTax}
              activeUSState={this.state.activeState}
            />
          </div>

          <div className="sbtci-home-data-summary sbtci-box">
            <div className="sbtci-box-heading">
              {this.state.activeUSState.name ? this.state.activeUSState.name : 'Rankings Summary'}
            </div>
            {this.state.activeUSState.total ? (
              <table className="sbtci-home-data-summary-table sbtci-box-text">
                <tbody>
                  {this.props.taxTypes.map((t) => {
                    return <tr className="sbtci-home-data-summary-ranks">
                      <style>{`#summary-${t.id}::before {
                        background-color: ${t.hex};
                      }`}</style>
                      <td className="sbtci-home-data-summary-tax" id={`summary-${t.id}`}>{t.name}</td>
                      <td style={{textAlign: 'right'}}>{this.state.activeUSState[t.id].rank}</td>
                    </tr>
                  })}
                </tbody>
              </table>
            ) : (
              <p className="sbtci-box-text">Hover over a state in the map to see its rankings.</p>
            )}
            {this.state.activeUSState.name ? (
              <Link
                className="sbtci-box-footer"
                to={`/state/${this.state.activeUSState.name.replace(/\s/g, '-').toLowerCase()}`}
              >See more about {this.state.activeUSState.name}.</Link>
            ) : (
              <p className="sbtci-box-footer">Please select a state.</p>
            )}
          </div>

          <div className="sbtci-home-social sbtci-box">
            <div className="sbtci-home-social-text">
              <h2>Spread the Word!</h2>
              <p>How does your state rank? Brag (or complain) to your friends!</p>
            </div>
            <div className="sbtci-home-social-buttons">
              <a
                href={`https://twitter.com/intent/tweet?text=${domain + this.props.location.pathname}`}
                className="sbtci-home-social-button sbtci-social--twitter">
                <IconTwitter fill="#ffffff" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${domain + this.props.location.pathname}`}
                className="sbtci-home-social-button sbtci-social--facebook">
                <IconFacebook fill="#ffffff" />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${domain + this.props.location.pathname}`}
                className="sbtci-home-social-button sbtci-social--linkedin">
                <IconLinkedIn fill="#ffffff" />
              </a>
              <a href="" className="sbtci-home-social-button sbtci-social--email">
                <IconEmail fill="#ffffff" />
              </a>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Home;
