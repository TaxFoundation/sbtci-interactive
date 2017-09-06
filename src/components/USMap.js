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

    this.gradients = {
      total: interpolateGnBu
    };
  }

  projection() {
    return geoAlbersUsa()
      .scale(800)
      .translate([600/2, 400/2 - 25]);
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
            fill={this.gradients[this.props.activeTax](scaleRank(d.total.rank))}
            stroke='#ffffff'
            strokeWidth={ 1 }
            strokeLinejoin='bevel'
          />
        </Link>
      );
    });

    const legendWidth = 30;
    const legendCount = 10;
    const legend = [...Array(legendCount).keys()].map((d) => {
      return (
        <rect
          x={ d * legendWidth + (300 - legendWidth*legendCount/2)}
          y="370"
          width="25"
          height="25"
          fill={ this.gradients[this.props.activeTax]((legendCount - d)/10) }
        />
      );
    })

    return (
      <svg width="100%" viewBox="0 0 600 400">
        <g className='states'>
          { states }
        </g>
        <g className="legend">
          <text textAnchor="end" style={{fontSize: '12px'}}>
            <tspan x={300 - legendWidth*legendCount/2 - 5} y="379">Worse</tspan>
            <tspan x={300 - legendWidth*legendCount/2 - 5} y="394">Rank</tspan>
          </text>
          <text textAnchor="start" style={{fontSize: '12px'}}>
            <tspan x={300 + legendWidth*legendCount/2 + 3} y="379">Better</tspan>
            <tspan x={300 + legendWidth*legendCount/2 + 3} y="394">Rank</tspan>
          </text>
          { legend }
        </g>
      </svg>
    );
  }
}

export default USMap;
