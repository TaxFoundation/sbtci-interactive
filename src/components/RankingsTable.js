import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RankingsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      USStateData: this.props.USStateData
    };
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>State</th>
            {this.props.taxTypes.map(t => <th>{t.name}</th>)}
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
