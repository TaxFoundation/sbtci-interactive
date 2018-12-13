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
    id: 9,
    text: 'A temporary corporate income tax surcharge in Connecticut was permitted to phase down from 20 to 10 percent in 2018, reducing the top marginal rate (surcharge-inclusive) from 9.0 to 8.25 percent. Originally set to expire at the end of 2015, legislation adopted that year postponed its elimination until 2019, with a phasedown in 2018. This year’s budget will further postpone the surcharge’s repeal, but the 2018 rate reduction helped the state improve four places on the corporate component of the Index, from 33rd to 29th. Connecticut’s overall rank remains unchanged at 47th.'
  },
  {
    id: 10,
    text: 'Delaware reversed its short-lived and counterproductive experiment with the estate tax, repealing it as of January 1, 2018. First adopted less than a decade ago, the tax generated very little revenue while driving wealthy seniors out of the state. Legislators scrapped the tax this year, and its elimination is the driving force behind the state’s improvement from 20th to 9th on the property tax component of the Index, and from 16th to 11th overall.'
  },
  {
    id: 11,
    text: 'In 2014, the District of Columbia began phasing in a tax reform package which lowered individual income taxes for middle-income brackets, expanded the sales tax base, raised the estate tax exemption, and reduced the corporate income tax rate. This year saw the final stage of those reforms implemented, with the corporate income tax declining to 8.25 percent and the standard deduction increasing to match the new federal deduction of $12,000. The corporate income tax rate reduction helped D.C. improve one place, from 28th to 27th, on the corporate component of the Index.'
  },
  {
    id: 15,
    text: 'Last year, Hawaii legislators voted to restore the higher rates and brackets associated with a temporary tax increase which had been allowed to expire a year ago. The legislation reestablished three individual income tax brackets that had been eliminated and restored the top marginal rate to 11 percent, up from 8.25 percent. These changes went into effect in calendar year 2018 and caused the state to slip four places overall, from 34th to 38th, and from 38th to 47th on the individual income tax component.'
  },
  {
    id: 16,
    text: 'Idaho improved from 23rd to 21st overall due to individual and corporate income tax rate cuts adopted in response to base-broadening provisions of federal tax reform. Policymakers trimmed both rates by 0.475 percentage points, from 7.4 to 6.925 percent.'
  },
  {
    id: 18,
    text: 'Indiana saw consistent rate reductions through a series of responsible tax reform efforts between 2011 and 2016. Subsequent legislation established a further schedule of corporate income tax reductions through fiscal year 2022. For 2018, the corporate income tax rate declined from 6 to 5.75 percent. This rate reduction, among other changes, drove an improvement of six places on the corporate component of the Index. The Hoosier State and Utah continue to post the best rankings among states which impose all the major taxes.'
  },
  {id: 20, text: 'Recurring revenue shortfalls precipitated by a shortsighted package of tax cuts adopted in 2012 which, among other things, exempted all pass-through income from taxation, prompted legislators to phase in individual income tax rate increases over the past two years. Last year’s rate increase, which also added an additional tax bracket, resulted in a decline in the state’s overall ranking. However, this year’s further rate increase, from 5.2 to 5.7 percent, had no effect on the state’s overall rank. It did, however, drop Kansas two places–from 19th to 21st–on the individual income tax component.'},
  {
    id: 21,
    text: 'Kentucky adopted revenue-positive tax reform which increases tax collections (primarily to address unfunded pension liabilities) while improving the overall tax structure. The state moved from a six-bracket individual income tax with a top rate of 6 percent to a 5 percent single-rate tax and scrapped its three-bracket corporate income tax for a single-rate tax as well. Lawmakers also suspended several business tax credits, broadened the sales tax base, and raised the cigarette tax, among other changes. These structural changes and tax simplifications yielded a 16-place improvement in Kentucky’s overall ranking, from 39th to 23rd, with a particularly strong improvement on the individual income tax component, where the state jumped from 37th to 17th nationwide.'
  },
  {
    id: 34,
    text: 'New Jersey completed the phaseout of its estate tax in 2018 and reduced its sales tax rate from 6.875 to 6.625 percent, the culmination of a two-year swap involving higher gas tax rates. At the same time, however, lawmakers created a new individual income tax bracket with a rate of 10.75 percent, the third-highest in the country, and added a corporate income tax surcharge on companies with income of $1 million or more, which brings their tax rate to 11.5 percent. The sales tax rate reduction improves the state one place on that component, while estate tax repeal drives an improvement from 50th to 48th on the property tax component. The state’s individual income tax rank drops from 48th to 50th, and its corporate income tax rank falls from 42nd to 47th with the new rate increases. The state continues to rank worst overall on the Index.'
  },
  {
    id: 50,
    text: 'Set to experience a substantial revenue windfall due to federal tax reform, Vermont eliminated an individual income tax bracket while changing the top rate to 8.75 percent, down from 8.95 percent. The rate reduction and bracket contraction drove an improvement of six places on the individual income tax component, from 43rd to 37th, and helped the state improve one place, from 42nd to 41st, overall.'
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
