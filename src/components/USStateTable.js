import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'd3-format';

class USStateTable extends Component {
  render() {
    let rankChanges = this.props.taxTypes.map((t) => {
      let delta = this.props.stateData[t.id].prevRank - this.props.stateData[t.id].rank;
      let color = null;
      if (delta < 0) { color = '#ff0022'; }
      if (delta > 0) { color = '#22ee77'; }
      return {
        id: t.id,
        delta: delta,
        color
      };
    });

    const scoreFormat = format('.3r')

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
              <tr>
                <td style={{borderRight: `3px inset ${t.hex}`}}>
                  <Link
                    className="sbtci-table-link"
                    to={t.id === 'total' ? '/' : `/tax/${t.id}`}
                  >
                    {t.name}
                  </Link>
                </td>
                <td style={{textAlign: 'right'}}>
                  { `#${this.props.stateData[t.id].rank}` }
                  <span
                    className="sbtci-table-change"
                    style={
                      rankChange.delta !== 0
                      ? {color: rankChange.color}
                      : null
                    }
                  >
                    {`(${rankChange.delta > 0 ? '+' : ''}${rankChange.delta})`}
                  </span>
                </td>
                <td style={{textAlign: 'right'}}>
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
