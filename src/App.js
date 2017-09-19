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
  {name: 'Overall Rank', id: 'total', hex: '#007BC3'},
  {name: 'Corporate Taxes', id: 'corporate', hex: '#009688'},
  {name: 'Individual Taxes', id: 'individual', hex: '#4DAF4E'},
  {name: 'Sales Taxes', id: 'sales', hex: '#FEC111'},
  {name: 'Property Taxes', id: 'propertyTax', hex: '#EF4438'},
  {name: 'Unemp. Insur. Taxes', id: 'unemployment', hex: '#903F98'},
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
            stateData={s}
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
