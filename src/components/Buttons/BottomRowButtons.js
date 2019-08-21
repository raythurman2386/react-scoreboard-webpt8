import React from 'react';
import '../App.css';

const BottomRowButtons = props => {
  return (
    <div className='bottomRowButtons'>
      {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
      <button className='homeButtons__touchdown' onClick={props.down}>
        Down
      </button>
      <button className='homeButtons__touchdown' onClick={props.quarter}>
        Quarter
      </button>
    </div>
  );
};

export default BottomRowButtons;
