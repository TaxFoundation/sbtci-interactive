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
  {name: 'Overall Rank', id: 'total'},
  {name: 'Corporate Taxes', id: 'corporate'},
  {name: 'Individual Taxes', id: 'individual'},
  {name: 'Sales Taxes', id: 'sales'},
  {name: 'UI Taxes', id: 'unemployment'},
  {name: 'Property Taxes', id: 'propertyTax'}
];

class App extends Component {

  render() {
    const stateRoutes = SBTCIData.map((s) => {
      let r = `/state/${s.name.replace(/\s/g, '-').toLowerCase()}`;
      return (
        <Route
          key={ `route-${s.id}` }
          path={r}
          render={(props) => <USState {...props} stateData={s} />}
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
              taxTypes={taxTypes}
              activeTax={t.id}
              SBTCIData={SBTCIData}
              USData={USData}
            />
          }
        />
      );
    });

    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={
                (props) => <Home
                  {...props}
                  taxTypes={taxTypes}
                  activeTax='total'
                  SBTCIData={SBTCIData}
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
