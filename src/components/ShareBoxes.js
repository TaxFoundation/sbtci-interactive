import React from 'react';
import { fullName, ordinal } from './Helpers';
import { IconFacebook, IconTwitter } from './SocialIcons';

const Box = ({children}, context) => {
  return (
    <div className="sbtci-box sbtci-state-share-box">
      <p className="sbtci-state-share-box-text">{children}</p>
      <div className="sbtci-state-share-box-buttons">
        <IconFacebook
          className="sbtci-social--facebook sbtci-state-share-box-button"
          fill="#ffffff"
          text="Share"
        />
        <IconTwitter
          className="sbtci-social--twitter sbtci-state-share-box-button"
          fill="#ffffff"
          text="Tweet"
          message={children}
        />
      </div>
    </div>
  );
}

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
      <Box>
        {`${props.stateData.name} ranks ${ordinal(bestRank.rank)} for ${fullName(bestRank.name).toLowerCase()}.`}
      </Box>
      <Box>
      {`${props.stateData.name} ranks ${ordinal(worstRank.rank)} for ${fullName(worstRank.name).toLowerCase()}.`}
      </Box>
    </div>
  );
};

export default ShareBoxes;