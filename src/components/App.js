//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import TopRow from './TopRow';
import BottomRow from './BottomRow';
import HomeButtons from './Buttons/HomeButtons';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  return (
    <div className='container'>
      <section className='scoreboard'>
        <TopRow homeName='Colts' awayName='Patriots' home={homeScore} away={awayScore} />
        <BottomRow />
      </section>
      <section className='buttons'>
        <HomeButtons touchdown={() => setHomeScore(homeScore + 7)} fieldgoal={() => setHomeScore(homeScore + 3)} />
        {/* <div className='homeButtons'>
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. 
          <button className='homeButtons__touchdown' onClick={() => setHomeScore(homeScore + 7)}>
            Home Touchdown
          </button>
          <button className='homeButtons__fieldGoal' onClick={() => setHomeScore(homeScore + 3)}>
            Home Field Goal
          </button>
        </div> */}
        <div className='awayButtons'>
          <button className='awayButtons__touchdown' onClick={() => setAwayScore(awayScore + 7)}>
            Away Touchdown
          </button>
          <button className='awayButtons__fieldGoal' onClick={() => setAwayScore(awayScore + 3)}>
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
