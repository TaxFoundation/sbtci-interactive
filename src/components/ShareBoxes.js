import React from 'react';
import { fullName, ordinal } from './Helpers';
import { IconFacebook, IconTwitter } from './SocialIcons';
import blurbs from '../data/blurbs.json';

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
            noVia={props.noVia}
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

  const standardText = (name, item) => {
    return {
      text: `${name} ranks ${ordinal(item.rank)} for ${fullName(item.name).toLowerCase()}.`,
      hashtags: 'StateTaxReform'
    };
  }

  const stateBlurbs = blurbs.filter((b) => {
    return b.id === props.stateData.id;
  })[0];

  let shareTexts = [];

  if (stateBlurbs) { stateBlurbs['blurbs'].map(b => shareTexts.push(b)); }
  shareTexts.push(standardText(props.stateData.name, bestRank));
  shareTexts.push(standardText(props.stateData.name, worstRank));
  
  shareTexts = shareTexts.slice(0, 2);

  return (
    <div>
      { shareTexts.map((t, i) => {
        return <Box key={`share-${i}`} social="twitter" noVia={true} hashtags={t.hashtags}>{t.text}</Box>;
      })}
      <Box social="facebook"></Box>
    </div>
  );
};

export default ShareBoxes;