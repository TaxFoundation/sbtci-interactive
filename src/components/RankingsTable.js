import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { sortComparison } from './Helpers';

class RankingsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      USStateData: this.props.USStateData,
      sortedBy: 'id',
      sorted: 'asc'
    };

    this.sortTable = this.sortTable.bind(this);
  }

  sortTable(key) {
    const newState = {...this.state};
    newState.sortedBy = key;
    if (this.state.sortedBy === newState.sortedBy) {
      newState.sorted = this.state.sorted === 'asc' ? 'desc' : 'asc';
    } else {
      newState.sorted = 'asc'
    }
    newState.USStateData.sort(sortComparison(newState.sortedBy, newState.sorted));
    this.setState(newState);
  }

  render() {
    return (
      <table className="sbtci-table">
        <thead>
          <tr>
            <th onClick={e => this.sortTable('id')}>State</th>
            {this.props.taxTypes.map((t) => {
              return (
                <th
                  onClick={e => this.sortTable(`${t.id}`)}
                  style={{borderBottom: `3px solid ${t.hex}`}}
                >
                  {t.name}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {this.state.USStateData.map((s) => {
            return (
              <tr>
                <td><Link to={`/state/${s.name.replace(/\s/g, '-').toLowerCase()}`}>{s.name}</Link></td>
                {this.props.taxTypes.map((t) => {
                  return (
                    <td>{s[t.id].rank}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default RankingsTable;
