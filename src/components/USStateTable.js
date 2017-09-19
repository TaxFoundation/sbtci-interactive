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
            <th>Rank</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {this.props.taxTypes.map((t) => {
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
                  <td>{ this.state[t.id].rank}</td>
                  <td>{ this.state[t.id].value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default USStateTable;
