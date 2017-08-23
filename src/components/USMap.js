import React from 'react';
import { Link } from 'react-router-dom';
import { geoAlbersUsa, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import USData from '../data/us.json';

class USMap extends React.Component {
  constructor(props) {
    super(props);

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
    const USDataFeatures = feature(USData, USData.objects.states).features
    const states = USDataFeatures.map((d, i) => {
      let stateData = this.props.SBTCIData.filter((s) => {
        return s.id === +d.id;
      })[0];

      let routePath = '';
      if (stateData) {
        routePath = `/state/${stateData.name.replace(/\s/g, '-').toLowerCase()}`;
      }

      return <Link key={ `path-${ d.id }` } to={routePath}>
        <path
          onMouseEnter={(e) => this.updateHoverData(d.id)}
          d={ geoPath().projection(this.projection())(d) }
          className='state'
          fill='transparent'
          stroke='#000000'
          strokeWidth={ 1 }
        />
      </Link>
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
