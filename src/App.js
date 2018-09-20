import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import config from './data/config';
import taxTypes from './data/taxTypes';
import notableChanges from './data/notableChanges';
import Header from './components/Header';
import Home from './components/Home';
import USState from './components/USState';
import Footer from './components/Footer';
import PopIn from './components/PopIn';
import Contribute from './components/Contribute';
import FourOhFour from './components/FourOhFour';
import SBTCIData from './data/SBTCI.json';
import USData from './data/us.json';
import MailChimp from './components/MailChimp';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
      rankingsMenuOpen: false,
      statesMenuOpen: false,
      shareMenuOpen: false,
      emailSubscribe: false,
    };

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.closeAllMobileMenu = this.closeAllMobileMenu.bind(this);
    this.openStatesMenu = this.openStatesMenu.bind(this);
    this.toggleEmailSubscribe = this.toggleEmailSubscribe.bind(this);
  }

  toggleMobileMenu(menu) {
    let newState = Object.assign(this.state);
    newState[menu] = !newState[menu];
    this.setState(newState);
  }

  closeAllMobileMenu() {
    let newState = Object.assign(this.state);
    newState.menuOpen = false;
    newState.rankingsMenuOpen = false;
    newState.statesMenuOpen = false;
    this.setState(newState);
  }

  openStatesMenu() {
    let newState = Object.assign(this.state);
    newState.menuOpen = true;
    newState.rankingsMenuOpen = false;
    newState.statesMenuOpen = true;
    this.setState(newState);
  }

  toggleEmailSubscribe() {
    let newState = Object.assign(this.state);
    newState.emailSubscribe = !newState.emailSubscribe;
    this.setState(newState);
  }

  render() {
    const stateRoutes = SBTCIData.map(s => {
      let r = `/state/${s.name.replace(/\s/g, '-').toLowerCase()}/`;
      return (
        <Route
          key={`route-${s.id}`}
          path={r}
          render={props => (
            <USState
              {...props}
              stateId={s.id}
              USStates={SBTCIData}
              taxTypes={taxTypes}
              toggleEmailSubscribe={this.toggleEmailSubscribe}
            />
          )}
        />
      );
    });

    const taxRoutes = taxTypes.map(t => {
      let r = `/tax/${t.id}/`;
      return (
        <Route
          key={`route-${t.id}`}
          path={r}
          render={props => (
            <Home
              {...props}
              activeTax={t.id}
              SBTCIData={SBTCIData}
              taxTypes={taxTypes}
              USData={USData}
              notableChanges={notableChanges}
              openStatesMenu={this.openStatesMenu}
              toggleEmailSubscribe={this.toggleEmailSubscribe}
            />
          )}
        />
      );
    });

    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Fragment>
            <Header
              taxTypes={taxTypes}
              methodology={config.methodology}
              USStates={SBTCIData.map(s => {
                return { name: s.name };
              })}
              toggleMobileMenu={this.toggleMobileMenu}
              closeAllMobileMenu={this.closeAllMobileMenu}
              menuOpen={this.state.menuOpen}
              rankingsMenuOpen={this.state.rankingsMenuOpen}
              statesMenuOpen={this.state.statesMenuOpen}
              shareMenuOpen={this.state.shareMenuOpen}
              toggleEmailSubscribe={this.toggleEmailSubscribe}
            />

            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Home
                    {...props}
                    activeTax="total"
                    SBTCIData={SBTCIData}
                    taxTypes={taxTypes}
                    USData={USData}
                    notableChanges={notableChanges}
                    openStatesMenu={this.openStatesMenu}
                  />
                )}
              />
              {stateRoutes}
              {taxRoutes}
              <Route path="/contribute/" component={Contribute} />
              <Route component={FourOhFour} />
            </Switch>
            <Footer />
            <PopIn
              timeout="30000"
              active={this.state.emailSubscribe}
              toggle={this.toggleEmailSubscribe}
            >
              <MailChimp />
            </PopIn>
          </Fragment>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
