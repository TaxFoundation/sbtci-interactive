import React, { Component } from 'react';

class USMapDataSummary extends Component {
  render() {
    return (
      <div className="sbtci-home-data-summary sbtci-box">
        <div className="sbtci-box-heading">
          {this.props.activeUSState.name ? this.props.activeUSState.name : 'Ranking Summary'}
        </div>
        {this.props.activeUSState.total ? (
          <table className="sbtci-home-data-summary-table sbtci-box-text">
            <thead>
              <tr>
                <th style={{textAlign: 'left'}}>Tax Type</th>
                <th>Rank</th>
              </tr>
            </thead>
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
                      {this.props.activeUSState[t.id].rank}
                    </td>
                  </tr>
                );})}
            </tbody>
          </table>
        ) : (
          <p className="sbtci-box-text">Hover over a state in the map to see its rankings.</p>
        )}
      </div>
    );
  }
}

export default USMapDataSummary;
