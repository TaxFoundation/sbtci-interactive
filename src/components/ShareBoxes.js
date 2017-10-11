import React from 'react';
import { fullName, ordinal } from './Helpers';
import { IconFacebook, IconTwitter } from './SocialIcons';

const Box = (props) => {
  return (
    <div className="sbtci-box sbtci-state-share-box">
      <p className="sbtci-state-share-box-text">
        {props.social === 'twitter' ? props.children : 'Share this page on Facebook.'}
      </p>
      <div className="sbtci-state-share-box-buttons">
        { props.social === 'twitter'
          ? <IconTwitter
            className="sbtci-social--twitter sbtci-state-share-box-button"
            fill="#ffffff"
            text="Tweet"
            message={props.children}
            hashtags={props.hashtags}
          />
          : <IconFacebook
            className="sbtci-social--facebook sbtci-state-share-box-button"
            fill="#ffffff"
            text="Share"
          />
        }

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
      <Box social="twitter" hashtags="StateTaxReform">
        {`${props.stateData.name} ranks ${ordinal(bestRank.rank)} for ${fullName(bestRank.name).toLowerCase()}.`}
      </Box>
      <Box social="twitter" hashtags="StateTaxReform">
        {`${props.stateData.name} ranks ${ordinal(worstRank.rank)} for ${fullName(worstRank.name).toLowerCase()}.`}
      </Box>
      <Box social="facebook"></Box>
    </div>
  );
};

export default ShareBoxes;