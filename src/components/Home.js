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
              key={`tax-nav-${t.id}`}
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
              activeUSState={this.state.activeUSState}
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
                    return (
                      <tr
                        className="sbtci-home-data-summary-ranks"
                        key={`summary-row-${t.id}`}
                      >
                      <style>{
                        `#summary-label-${t.id}::before {
                          background-color: ${t.hex};
                        }
                        ${this.props.activeTax === t.id
                          ? `#summary-label-${t.id},
                            #summary-rank-${t.id} {
                              font-size: 1rem;
                              font-weight: 700;
                            }`
                          : ''
                        }`
                      }</style>
                      <td
                        className="sbtci-home-data-summary-tax"
                        id={`summary-label-${t.id}`}
                      >
                        {t.name}
                      </td>
                      <td
                        className="sbtci-home-data-summary-rank"
                        id={`summary-rank-${t.id}`}
                        style={{textAlign: 'right'}}
                      >
                        {this.state.activeUSState[t.id].rank}
                      </td>
                    </tr>
                  );})}
                </tbody>
              </table>
            ) : (
              <p className="sbtci-box-text">Hover over a state in the map to see its rankings.</p>
            )}
          </div>

          <div className="sbtci-home-social sbtci-box">
            <div className="sbtci-home-social-text">
              <h2>Spread the Word!</h2>
              <p>How does your state rank? Brag (or complain) to your friends!</p>
            </div>
            <div className="sbtci-home-social-buttons">
              <IconTwitter
                className="sbtci-home-social-button sbtci-social--twitter"
                fill="#ffffff"
              />
              <IconFacebook
                className="sbtci-home-social-button sbtci-social--facebook"
                fill="#ffffff"
              />
              <IconLinkedIn
                className="sbtci-home-social-button sbtci-social--linkedin"
                fill="#ffffff"
              />
              <IconEmail
                className="sbtci-home-social-button sbtci-social--email"
                fill="#ffffff"
              />
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Home;
