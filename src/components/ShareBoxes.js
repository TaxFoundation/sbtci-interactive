import React from 'react';
import { fullName, ordinal } from './Helpers';

const ShareBoxes = (props) => {
  const ranks = props.taxTypes.map((t) => {
    let rank = props.stateData[t.id];
    rank['name'] = t.name;
    return rank;
  });

  const bestRank = ranks.reduce((prev, cur) => {
    return prev.rank < cur.rank ? prev : cur;
  });

  const worstRank = ranks.reduce((prev, cur) => {
    return prev.rank > cur.rank ? prev : cur;
  });

  return (
    <div>
      <div>{props.stateData.name} ranks {ordinal(bestRank.rank)} for {fullName(bestRank.name).toLowerCase()}.</div>
      <div>{props.stateData.name} ranks {ordinal(worstRank.rank)} for {fullName(worstRank.name).toLowerCase()}.</div>
    </div>
  );
};

export default ShareBoxes;