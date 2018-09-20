import React, { Component, Fragment } from 'react';
import styleMedia, { css } from 'styled-components';

const NavLinks = styled.nav`
  display: none;
  @media screen and (min-width: ${props => props.theme.tabletWidth}) {
    align-content: end;
    cursor: pointer;
    display: grid;
    grid-area: nav;
    grid-auto-flow: column;
    justify-content: right;
  }
`;

const NavLinkStyles = css`
  color: #ffffff;
  padding: 15px 10px;
  text-decoration: none;
  text-transform: uppercase;

  &:active,
  &:hover {
    background-color: ${props => props.theme.sbtciSecondary};
  }
`;

const NavSection = styled.div`
  ${NavLinkStyles};
`;

const NavLink = styled(Link)`
  ${NavLinkStyles};
`;

const SubNavLinks = styled.div`
  align-items: center;
  box-shadow: 0 2px 2px ${props => props.theme.darkGray};
  padding: 0.5rem;
  background-color: #fff;
  max-width: 960px;
  position: absolute;
  right: 0%;
  top: 100%;
  width: 100%;
  z-index: 1000;
`;

const RankingsLinks = styled(SubNavLinks)`
  display: ${props => (props.active ? 'grid' : 'none')};
  grid-gap: 1rem;
  justify-content: space-around;
`;

const StatesLinks = styled(SubNavLinks)`
  display: ${props => (props.active ? 'block' : 'none')};
  column-count: 5;
  column-gap: 1rem;
`;

const SubNavLink = styled(Link)`
  color: ${props => props.theme.sbtciPrimary};
  display: block;
  padding: 0.5rem;
  text-align: left;
  text-decoration: none;
  text-transform: none;

  &:hover {
    color: ${props => props.theme.sbtciSecondary};
  }
`;

class NavigationDesktop extends Component {
  render() {
    return (
      <SBTCIContext.Consumer>
        {context => {
          const USStates = context.SBTCIData.map(s => {
            return { name: s.name };
          });
          const RankingLinks = context.taxTypes.map(t => {
            let r = `/tax/${t.id}/`;
            if (t.id === 'total') {
              r = '/';
            }
            return (
              <SubNavLink
                key={`nav-tax-${t.id}`}
                onClick={() => this.toggleMenu(null)}
                to={r}
              >
                {t.name}
              </SubNavLink>
            );
          });

          const StateLinks = USStates.map(s => {
            return (
              <SubNavLink
                key={`nav-state-${s.name.replace(/\s/g, '-').toLowerCase()}`}
                onClick={() => this.toggleMenu(null)}
                to={`/state/${s.name.replace(/\s/g, '-').toLowerCase()}/`}
              >
                {s.name}
              </SubNavLink>
            );
          });

          return (
            <Fragment>
              <NavLinks>
                <NavSection
                  onMouseEnter={() => this.toggleMenu('rankings')}
                  onMouseLeave={() => this.toggleMenu(null)}
                >
                  Rankings
                  <RankingsLinks
                    active={this.state.openMenu === 'rankings'}
                    style={{ gridAutoFlow: 'column' }}
                  >
                    {RankingLinks}
                  </RankingsLinks>
                </NavSection>
                <NavSection
                  onMouseEnter={() => this.toggleMenu('states')}
                  onMouseLeave={() => this.toggleMenu(null)}
                >
                  States
                  <StatesLinks
                    active={this.state.openMenu === 'states'}
                    style={{ columnCount: 5, columnGap: '1rem' }}
                  >
                    {StateLinks}
                  </StatesLinks>
                </NavSection>
                <NavLink to={this.props.methodology}>Methodology</NavLink>
              </NavLinks>
            </Fragment>
          );
        }}
      </SBTCIContext.Consumer>
    );
  }
}
