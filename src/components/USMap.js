import React from 'react';
import { Link } from 'react-router-dom';
import { geoAlbersUsa, geoPath } from 'd3-geo';
import { scaleLinear } from 'd3-scale';
import {
  interpolateGnBu,
  interpolateBuGn,
  interpolateYlGn,
  interpolateYlOrBr,
  interpolateYlOrRd,
  interpolateRdPu
} from 'd3-scale-chromatic';
import { feature } from 'topojson-client';

class USMap extends React.Component {
  constructor(props) {
    super(props);

    this.projection = this.projection.bind(this);
    this.updateHoverData = this.updateHoverData.bind(this);

    this.gradients = {
      total: interpolateGnBu,
      corporate: interpolateBuGn,
      individual: interpolateYlGn,
      sales: interpolateYlOrBr,
      unemployment: interpolateRdPu,
      property: interpolateYlOrRd
    };

    this.smallStates = {
      10: {
        x: 560,
        y: 160,
        originX: 528,
        originY: 148
      },
      11: {
        x: 560,
        y: 200,
        originX: 509,
        originY: 152
      },
      44: {
        x: 560,
        y: 120,
        originX: 557,
        originY: 104
      }
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
    const USDataFeatures = feature(this.props.USData, this.props.USData.objects.states).features;
    const scaleRank = scaleLinear().domain([0, 50]).range([0, 1]);

    const states = this.props.SBTCIData.map((d, i) => {
      let statePath = USDataFeatures.filter((s) => {
        return +s.id === +d.id;
      })[0];
      let smallStateRect;
      if (d.id in this.smallStates) {
        let smallState = this.smallStates[d.id];
        smallStateRect = (
          <g>
            <line
              stroke="#666666"
              strokeWidth="1"
              x1={smallState.x + 3}
              y1={smallState.y + 3}
              x2={smallState.originX}
              y2={smallState.originY}
            />
            <rect
              onMouseEnter={() => this.updateHoverData(d.id)}
              x={smallState.x}
              y={smallState.y}
              height="16"
              width="16"
              fill={this.gradients[this.props.activeTax](scaleRank(d[this.props.activeTax].rank))}
              stroke='#ffffff'
              strokeLinejoin='bevel'
              strokeWidth={ d.id === this.props.activeUSState.id ? 3 : 1 }
            />
            <text
              fontSize="12"
              textAnchor="middle"
              x={smallState.x + 8}
              y={smallState.y + 28}
            >
              {d.abbr}
            </text>
          </g>
        );
      }

      let routePath = `/state/${d.name.replace(/\s/g, '-').toLowerCase()}/`;
      return (
        <Link key={ `path-${ d.id }` } to={routePath}>
          <path
            onMouseEnter={() => this.updateHoverData(d.id)}
            d={ geoPath().projection(this.projection())(statePath) }
            id={`state-${d.id}`}
            className='state'
            fill={this.gradients[this.props.activeTax](scaleRank(d[this.props.activeTax].rank))}
            stroke='#ffffff'
            strokeLinejoin='bevel'
            strokeWidth={ d.id === this.props.activeUSState.id ? 3 : 1 }
          />
          {smallStateRect}
        </Link>
      );
    });

    const legendCount = 10;
    const legend = [...Array(legendCount).keys()].map((d) => {
      let color = this.gradients[this.props.activeTax]((legendCount - d)/10);
      return (
        <div
          key={`legend-${d}`}
          style={{
            backgroundColor: color,
            WebkitPrintColorAdjust: 'exact'
          }}
        ></div>
      );
    });

    return (
      <div>
        <svg width="100%" viewBox="0 0 600 400">
          <g className='states'>
            { states }
          </g>
        </svg>
        <div className="sbtci-home-map-legend">
          <div style={{paddingRight: '1rem', textAlign: 'right'}}>Worse<br />Rank</div>
          { legend }
          <div style={{paddingLeft: '1rem'}}>Better<br />Rank</div>
        </div>
      </div>
    );
  }
}

export default USMap;
