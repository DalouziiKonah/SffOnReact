import React from 'react';
import MarqueeConfig from './config/MarqueeConfig';

function Marquee({ messages = MarqueeConfig.messages }) {
  const combinedMessage = messages.join(' | ');

  return (
    <div className="marquee-wrapper">
      <div className="marquee-container">
        <p className="marquee-text">
          {combinedMessage}
        </p>
      </div>
    </div>
  );
}

export default Marquee;
