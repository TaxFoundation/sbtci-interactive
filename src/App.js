import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import USState from './components/USState';
import Footer from './components/Footer';
import FourOhFour from './components/FourOhFour'
import SBTCIData from './data/SBTCI.json';
import USData from './data/us.json';

const taxTypes = [
  {
    name: 'Overall Rank',
    id: 'total',
    hex: '#007BC3',
    description: 'The State Business Tax Climate Index is a measure of how well states structure their tax systems. It enables policymakers, business leaders, and taxpayers to gauge how their states’ tax systems compare, and provides a roadmap for improvement.'
  },
  {
    name: 'Corporate Taxes',
    id: 'corporate',
    hex: '#009688',
    description: 'The corporate tax component measures impacts of states’ major taxes on business activities, both corporate income and gross receipts taxes.'
  },
  {
    name: 'Individual Taxes',
    id: 'individual',
    hex: '#4DAF4E',
    description: 'The individual income tax component of the Index measures the impact of state and local taxes that fall on pass-through businesses.'
  },
  {
    name: 'Sales Taxes',
    id: 'sales',
    hex: '#FEC111',
    description: 'The sales tax component measures the impact of both sales and excise taxes, particularly when they fall upon business inputs.'
  },
  {
    name: 'Property Taxes',
    id: 'propertyTax',
    hex: '#EF4438',
    description: 'The property tax component measures impacts of real and personal property, inventory, estate, inheritance, and other wealth taxes.'
  },
  {
    name: 'Unemp. Insur. Taxes',
    id: 'unemployment',
    hex: '#903F98',
    description: 'The unemployment insurance tax component measures the impact of state UI tax attributes, from schedules to charging methods, on businesses.'
  },
];

class App extends Component {

  render() {
    const stateRoutes = SBTCIData.map((s) => {
      let r = `/state/${s.name.replace(/\s/g, '-').toLowerCase()}`;
      return (
        <Route
          key={ `route-${s.id}` }
          path={r}
          render={(props) => <USState
            {...props}
            stateId={s.id}
            USStates={SBTCIData}
            taxTypes={taxTypes}
          />}
        />
      );
    });

    const taxRoutes = taxTypes.map((t) => {
      let r = `/tax/${t.id}`;
      return (
        <Route
          key={ `route-${t.id}` }
          path={r}
          render={
            (props) => <Home
              {...props}
              activeTax={t.id}
              SBTCIData={SBTCIData}
              taxTypes={taxTypes}
              USData={USData}
            />
          }
        />
      );
    });

    return (
      <Router>
        <div>
          <Header
            taxTypes={taxTypes}
            USStates={SBTCIData.map((s) => { return {name: s.name}; })}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={
                (props) => <Home
                  {...props}
                  activeTax='total'
                  SBTCIData={SBTCIData}
                  taxTypes={taxTypes}
                  USData={USData}
                />
              }
            />
            { stateRoutes }
            { taxRoutes }
            <Route component={FourOhFour} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
