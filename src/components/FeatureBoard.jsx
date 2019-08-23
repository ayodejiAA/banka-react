import React from 'react';
import FeatureBox from './common/FeatureBox';
import texts from '../utils/featureBoxTexts';

const FeatureBoard = () => (
  <>
    <div className="container">
      <h1 id="undertext-line"> Core Features</h1>
      <div id="flex-boxes">
        {texts.map((text, index) => (
          <FeatureBox
            key={index}
            feature={text.feature}
            description={text.description}
            iconLink={text.iconLink}
          />
        ))}
      </div>
    </div>
  </>
);


export default FeatureBoard;
