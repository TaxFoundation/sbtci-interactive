import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'd3-format';

class USStateTable extends Component {
  render() {
    let rankChanges = this.props.taxTypes.map((t) => {
      let delta = this.props.stateData[t.id].prevRank - this.props.stateData[t.id].rank;
      let color = null;
      if (delta < 0) { color = '#ff0022'; }
      if (delta > 0) { color = '#00aa22'; }
      return {
        id: t.id,
        delta: delta,
        color
      };
    });

    const deltaFormat = format('+');
    const scoreFormat = format('.3r');

    return (
      <table className="sbtci-table">
        <caption className="sbtci-box-heading">{ this.props.stateData.name }</caption>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Rank</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {this.props.taxTypes.map((t) => {
            let rankChange = rankChanges.filter((c) => {
              return c.id === t.id;
            })[0];

            return (
              <tr key={`rank-and-score-${t.id}`}>
                <td style={{borderRight: `3px inset ${t.hex}`}}>
                  <Link
                    className="sbtci-table-link"
                    to={t.id === 'total' ? '/' : `/tax/${t.id}`}
                  >
                    {t.name}
                  </Link>
                </td>
                <td>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplate: 'auto / 1fr 1fr'
                    }}
                  >
                    <div style={{gridColumn: '1 / 2', gridRow: '1 / 2', textAlign: 'right'}}>
                      { this.props.stateData[t.id].rank }
                    </div>
                    <div style={{gridColumn: '2 / 3', gridRow: '1 / 2', textAlign: 'left'}}>
                      <span
                        className="sbtci-table-change"
                        style={
                          rankChange.delta !== 0
                            ? {color: rankChange.color}
                            : null
                        }
                      >
                        {`(${deltaFormat(rankChange.delta)})`}
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  { scoreFormat(this.props.stateData[t.id].value) }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default USStateTable;
