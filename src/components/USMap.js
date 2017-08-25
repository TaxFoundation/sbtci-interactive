import React from 'react';
import { Link } from 'react-router-dom';
import { geoAlbersUsa, geoPath } from 'd3-geo';
import { scaleLinear } from 'd3-scale';
import { interpolateGnBu } from 'd3-scale-chromatic';
import { feature } from 'topojson-client';

class USMap extends React.Component {
  constructor(props) {
    super(props);

    this.projection = this.projection.bind(this);
    this.updateHoverData = this.updateHoverData.bind(this);
  }

  projection() {
    return geoAlbersUsa()
      .scale(800)
      .translate([600/2, 400/2]);
  }

  updateHoverData(stateId) {
    this.props.updateActiveState(stateId);
  }

  render() {
    const path = geoPath().projection(this.projection);
    const USDataFeatures = feature(this.props.USData, this.props.USData.objects.states).features
    const scaleRank = scaleLinear().domain([0, 50]).range([0, 1]);
    const states = this.props.SBTCIData.map((d, i) => {
      let statePath = USDataFeatures.filter((s) => {
        return +s.id === +d.id;
      })[0];

      let routePath = `/state/${d.name.replace(/\s/g, '-').toLowerCase()}`;
      return (
        <Link key={ `path-${ d.id }` } to={routePath}>
          <path
            onMouseEnter={(e) => this.updateHoverData(d.id)}
            d={ geoPath().projection(this.projection())(statePath) }
            className='state'
            fill={interpolateGnBu(scaleRank(d.total.rank))}
            stroke='#ffffff'
            strokeWidth={ 1 }
            strokeLinejoin='bevel'
          />
        </Link>
      );
    });

    return (
      <svg width="100%" viewBox="0 0 600 400">
        <g className='states'>
          { states }
        </g>
      </svg>
    );
  }
}

export default USMap;
