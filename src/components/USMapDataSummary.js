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
          <div className="sbtci-box-text" style={{fontSize: '0.85rem'}}>
            <p>The <em>State Business Tax Climate Index</em> is a measure of how well states structure their tax systems. It enables policymakers, business leaders, and taxpayers to gauge how their states’ tax systems compare, and provides a roadmap for improvement.</p>
            <p>Hover over a state in the map to see its rankings. Click a state or tax category to learn more!</p>
          </div>
        )}
      </div>
    );
  }
}

export default USMapDataSummary;
