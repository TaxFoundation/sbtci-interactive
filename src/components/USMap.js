import React from 'react';
import { geoAlbersUsa, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import USData from '../data/us.json';

class USMap extends React.Component {
  constructor() {
    super();
    this.state = {
      USData: feature(USData, USData.objects.states).features
    };
  }

  projection() {
    return geoAlbersUsa()
      .scale(1000)
      .translate([400/2, 600/2]);
  }

  render() {
    const path = geoPath().projection(this.projection);
    const states = this.state.USData.map((d, i) => {
      return <path
              key={ `path-${ i }` }
              d={ geoPath().projection(this.projection())(d) }
              className='state'
              fill='transparent'
              stroke='#000000'
              strokeWidth={ 1 }
            />
    });

    return (
      <svg height={400} width={600} viewBox="0 0 400 600">
        <g className='states'>
          { states }
        </g>
      </svg>
    );
  }
}

export default USMap;
