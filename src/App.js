import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

const taxTypes = [
  {
    name: 'Overall Rank',
    id: 'total',
    hex: '#007BC3',
    description: ''
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
    id: 'property',
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

const notableChanges = [
  {
    id: 4,
    text: 'Arizona improved six places on the Index’s corporate component as a multiyear phasedown concluded with a 4.9% corporate income tax rate.'
  },
  {
    id: 6,
    text: 'California extended income but not sales tax hikes, though local sales tax increases dropped California in the Index’s sales tax component.'
  },
  {
    id: 11,
    text: 'Continued tax reform efforts in the District of Columbia, including a corporate rate cut, improved D.C. two places on the Index’s corporate component.'
  },
  {
    id: 17,
    text: 'Illinois hiked both individual (3.75 to 4.95%) and corporate (7.75 to 9.5%) income tax rates, dropping the state from 28th to 29th on the Index.'
  },
  {
    id: 20,
    text: 'Kansas addressed structural deficits with a new income tax bracket and a 5.2% top rate, slipping three places on the Index.'
  },
  {
    id: 35,
    text: 'New Mexico’s continued phase-in of corporate income tax reductions improved the state one place on the Index’s corporate tax component.'
  },
  {
    id: 37,
    text: 'North Carolina reduced the corporate rate to 3% and the individual rate to 5.499%, improving the state’s individual income component ranking.'
  },
  {
    id: 44,
    text: 'Rhode Island unemployment insurance tax reform drove their Index UI component rank from 50th to 23rd and improved them to 41st overall.'
  }
];

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
    const stateRoutes = SBTCIData.map((s) => {
      let r = `/state/${s.name.replace(/\s/g, '-').toLowerCase()}/`;
      return (
        <Route
          key={ `route-${s.id}` }
          path={r}
          render={(props) => <USState
            {...props}
            stateId={s.id}
            USStates={SBTCIData}
            taxTypes={taxTypes}
            toggleEmailSubscribe={this.toggleEmailSubscribe}
          />}
        />
      );
    });

    const taxRoutes = taxTypes.map((t) => {
      let r = `/tax/${t.id}/`;
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
              notableChanges={notableChanges}
              openStatesMenu={this.openStatesMenu}
              toggleEmailSubscribe={this.toggleEmailSubscribe}
            />
          }
        />
      );
    });

    return (
      <Router>
        <div className="sbtci">
          <Header
            taxTypes={taxTypes}
            USStates={SBTCIData.map((s) => { return {name: s.name}; })}
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
              render={
                (props) => <Home
                  {...props}
                  activeTax='total'
                  SBTCIData={SBTCIData}
                  taxTypes={taxTypes}
                  USData={USData}
                  notableChanges={notableChanges}
                  openStatesMenu={this.openStatesMenu}
                />
              }
            />
            { stateRoutes }
            { taxRoutes }
            <Route path="/contribute/" component={Contribute} />
            <Route component={FourOhFour} />
          </Switch>
          <Footer />
          <PopIn
            timeout="30000"
            active={ this.state.emailSubscribe }
            toggle={ this.toggleEmailSubscribe }
          >
            <MailChimp />
          </PopIn>
        </div>
      </Router>
    );
  }
}

export default App;
