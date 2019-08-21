import React from 'react';
import '../App.css';

const AwayButtons = props => {
  return (
    <div className='awayButtons'>
      <button className='awayButtons__touchdown' onClick={props.touchdown}>
        Away Touchdown
      </button>
      <button className='awayButtons__fieldGoal' onClick={props.fieldgoal}>
        Away Field Goal
      </button>
    </div>
  );
};

export default AwayButtons;
