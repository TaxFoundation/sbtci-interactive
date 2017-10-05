import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { sortComparison } from './Helpers';

class RankingsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      USStateData: this.props.USStateData,
      sortedBy: 'id',
      sorted: 'desc',
      expanded: false
    };

    this.sortTable = this.sortTable.bind(this);
    this.expandToggle = this.expandToggle.bind(this);
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

  expandToggle() {
    const newState = {...this.state};
    newState.expanded = !newState.expanded;
    this.setState(newState);
  }

  render() {
    let currentSortClass = `sbtci-table-sorted--${this.state.sorted}`;
    let currentTableClass = this.state.expanded
      ? 'sbtci-box'
      : 'sbtci-box sbtci-table--condensed';
    return (
      <div className="sbtci-rankings-table">
        <div
          className="sbtci-rankings-table-expand sbtci-button sbtci-button--centered"
          onClick={() => this.expandToggle()}
        >
          { this.state.expanded ? 'Collapse Table' : 'Expand Table' }
        </div>
        <div className={ currentTableClass }>
          <table className="sbtci-table sbtci-table--compact">
            <thead>
              <tr>
                <th
                  className={
                    this.state.sortedBy === 'id'
                      ? `sbtci-table-sorted ${currentSortClass}`
                      : 'sbtci-table-sorted'
                  }
                  onClick={() => this.sortTable('id')}
                >
                  <div>State</div>
                </th>
                {this.props.taxTypes.map((t) => {
                  return (
                    <th
                      key={`rank-th-${t.id}`}
                      className={
                        this.state.sortedBy === t.id
                          ? `sbtci-table-sorted ${currentSortClass}`
                          : 'sbtci-table-sorted'
                      }
                      onClick={() => this.sortTable(`${t.id}`)}
                      style={{borderBottom: `3px solid ${t.hex}`}}
                    >
                      <div>{t.name.replace(/\s+/, '\n')}</div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {this.state.USStateData.map((s) => {
                return (
                  <tr key={`rank-row-${s.id}`}>
                    <td>
                      <Link
                        className="sbtci-table-link"
                        to={`/state/${s.name.replace(/\s/g, '-').toLowerCase()}`}
                      >
                        <span className="sbtci-full-state-name">{s.name}</span>
                        <span className="sbtci-abbr-state-name">{s.abbr}</span>
                      </Link>
                    </td>
                    {this.props.taxTypes.map((t) => {
                      return (
                        <td key={`rank-data-${s.id}-${t.id}`}>{s[t.id].rank}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div
            className="sbtci-table-expand-overlay"
            onClick={() => this.expandToggle()}
            style={ this.state.expanded ? { display: 'none' } : null }
          >
            Expand to see full list of rankings.
          </div>
        </div>
      </div>
    );
  }
}

export default RankingsTable;
