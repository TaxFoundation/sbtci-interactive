import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { sortComparison } from './Helpers';

class RankingsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      USStateData: this.props.USStateData,
      sortedBy: 'id',
      sorted: 'desc'
    };

    this.sortTable = this.sortTable.bind(this);
  }

  componentDidMount() {
    this.sortTable('id');
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
    let currentSortClass = `sbtci-table-sorted--${this.state.sorted}`;
    return (
      <table className="sbtci-table sbtci-table--compact">
        <thead>
          <tr>
            <th
              className={
                this.state.sortedBy === 'id'
                ? `sbtci-table-sorted ${currentSortClass}`
                : 'sbtci-table-sorted'
              }
              onClick={e => this.sortTable('id')}
            >
              State
            </th>
            {this.props.taxTypes.map((t) => {
              return (
                <th
                  className={
                    this.state.sortedBy === t.id
                    ? `sbtci-table-sorted ${currentSortClass}`
                    : 'sbtci-table-sorted'
                  }
                  onClick={e => this.sortTable(`${t.id}`)}
                  style={{borderBottom: `3px solid ${t.hex}`}}
                >
                  {t.name.replace(/\s+/, '\n')}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {this.state.USStateData.map((s) => {
            return (
              <tr>
                <td>
                  <Link
                    className="sbtci-table-link"
                    to={`/state/${s.name.replace(/\s/g, '-').toLowerCase()}`}
                  >
                    {s.name}
                  </Link>
                </td>
                {this.props.taxTypes.map((t) => {
                  return (
                    <td >{s[t.id].rank}</td>
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
