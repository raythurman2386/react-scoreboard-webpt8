//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import TopRow from './TopRow';
import BottomRow from './BottomRow';
import HomeButtons from './Buttons/HomeButtons';
import AwayButtons from './Buttons/AwayButtons';

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
        <AwayButtons touchdown={() => setAwayScore(awayScore + 7)} fieldgoal={() => setAwayScore(awayScore + 3)} />
      </section>
    </div>
  );
}

export default App;
