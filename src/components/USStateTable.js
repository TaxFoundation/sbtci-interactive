import React, { Component } from 'react';

class USStateTable extends Component {
  constructor(props) {
    super(props);
    this.state = props.stateData;
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>&nbsp;</td>
            <td>Overall Rank</td>
            <td>Corporate Taxes</td>
            <td>Individual Taxes</td>
            <td>Sales Taxes</td>
            <td>UI Taxes</td>
            <td>Property Taxes</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Rank</th>
            <th>{ this.state.total.rank }</th>
            <th>{ this.state.corporate.rank }</th>
            <th>{ this.state.individual.rank }</th>
            <th>{ this.state.sales.rank }</th>
            <th>{ this.state.unemployment.rank }</th>
            <th>{ this.state.propertyTax.rank }</th>
          </tr>
          <tr>
            <th>Score</th>
            <th>{ this.state.total.value }</th>
            <th>{ this.state.corporate.value }</th>
            <th>{ this.state.individual.value }</th>
            <th>{ this.state.sales.value }</th>
            <th>{ this.state.unemployment.value }</th>
            <th>{ this.state.propertyTax.value }</th>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default USStateTable;
