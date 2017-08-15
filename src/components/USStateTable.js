import React, { Component } from 'react';

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
            <th>Overall Rank</th>
            <th>Corporate Taxes</th>
            <th>Individual Taxes</th>
            <th>Sales Taxes</th>
            <th>UI Taxes</th>
            <th>Property Taxes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rank</td>
            <td>{ this.state.total.rank }</td>
            <td>{ this.state.corporate.rank }</td>
            <td>{ this.state.individual.rank }</td>
            <td>{ this.state.sales.rank }</td>
            <td>{ this.state.unemployment.rank }</td>
            <td>{ this.state.propertyTax.rank }</td>
          </tr>
          <tr>
            <td>Score</td>
            <td>{ this.state.total.value }</td>
            <td>{ this.state.corporate.value }</td>
            <td>{ this.state.individual.value }</td>
            <td>{ this.state.sales.value }</td>
            <td>{ this.state.unemployment.value }</td>
            <td>{ this.state.propertyTax.value }</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default USStateTable;
