import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import USState from './components/USState';
import Footer from './components/Footer';
import FourOhFour from './components/FourOhFour'
import SBTCIData from './data/SBTCI.json';
import USData from './data/us.json';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} SBTCIData={SBTCIData} USData={USData} />} />
            {SBTCIData.map((s) => {
              const r = `/state/${s.name.replace(/\s/g, '-').toLowerCase()}`;
              return (
                <Route
                  key={ `route-${s.id}` }
                  path={r}
                  render={(props) => <USState {...props} stateData={s} />}
                />
              );
            })}
            <Route component={FourOhFour} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
