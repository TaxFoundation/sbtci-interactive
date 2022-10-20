import React from 'react';
import { ordinal } from './Helpers';
import { IconFacebook, IconTwitter } from './SocialIcons';
import blurbs from '../data/blurbs.json';

const Box = (props) => {
  return (
    <div className="sbtci-box sbtci-state-share-box">
      <p className="sbtci-state-share-box-text">
        {props.social === 'twitter' ? props.children : 'Share this state\'s 2023 State Business Tax Climate rankings with your Facebook friends!'}
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
};

const ShareBoxes = (props) => {
  const standardText = (stateData) => {
    return {
      text: `${stateData.name} ranks ${ordinal(stateData.total.rank)} on the @taxfoundation 2023 Index`,
      hashtags: 'StateTaxReform'
    };
  };

  const stateBlurbs = blurbs.filter((b) => {
    return b.id === props.stateData.id;
  })[0];

  let shareTexts = [];

  if (stateBlurbs) { stateBlurbs['blurbs'].map(b => shareTexts.push(b)); }
  shareTexts.push(standardText(props.stateData, 'total'));
  shareTexts.push({
    text: 'See how your state\'s tax code stacks up on @taxfoundation\'s 2023 State Business Tax Climate Index',
    hashtags: 'StateTaxReform'
  });

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
