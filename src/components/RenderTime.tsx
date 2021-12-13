import React from 'react';

export default function RenderTime({ remainingTime }: any) {
    if (remainingTime === 0) {
      return <div className="timer">Next...</div>;
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };