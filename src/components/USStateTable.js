import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class USStateTable extends Component {
  constructor(props) {
    super(props);
    this.state = props.stateData;
  }

  render() {
    return (
      <table className="sbtci-table">
        <thead>
          <tr>
            <th>&nbsp;</th>
            {this.props.taxTypes.map((t) => {
              return (
                <th style={{borderBottom: `3px inset ${t.hex}`}}>
                  <Link
                    className="sbtci-table-link"
                    to={t.id === 'total' ? '/' : `/tax/${t.id}`}
                  >
                    {t.name}
                  </Link>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rank</td>
            {this.props.taxTypes.map((t) => {
              return (
                <td>{ this.state[t.id].rank}</td>
              );
            })}
          </tr>
          <tr>
            <td>Score</td>
            {this.props.taxTypes.map((t) => {
              return (
                <td>{ this.state[t.id].value}</td>
              );
            })}
          </tr>
        </tbody>
      </table>
    );
  }
}

export default USStateTable;
