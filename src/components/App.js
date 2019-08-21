//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import TopRow from "./TopRow";
import BottomRow from "./BottomRow";
import HomeButtons from "./Buttons/HomeButtons";
import AwayButtons from "./Buttons/AwayButtons";
import BottomRowButtons from "./Buttons/BottomRowButtons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  // hooks for the down and quarter
  const [quarter, setQuarter] = useState(1);
  const [down, setDown] = useState(1);

  // hooks for toGo and ballOn
  const [toGo, setToGo] = useState(10);
  const [ballOn, setBallOn] = useState(40);

  // hook for the timer
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);

  // useEffect for the timer
  useEffect(() => {
    const tick = window.setInterval(() => {
      if (seconds < 10) {
        setSeconds("0" + seconds);
      } else if (seconds <= 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return window.clearInterval(tick);
  }, [minutes, seconds]);

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow
          homeName="Colts"
          awayName="Patriots"
          home={homeScore}
          away={awayScore}
          min={minutes}
          sec={seconds}
        />
        <BottomRow down={down} quarter={quarter} toGo={toGo} ballOn={ballOn} />
      </section>
      <section className="buttons">
        <HomeButtons
          touchdown={() => setHomeScore(homeScore + 7)}
          fieldgoal={() => setHomeScore(homeScore + 3)}
        />
        <AwayButtons
          touchdown={() => setAwayScore(awayScore + 7)}
          fieldgoal={() => setAwayScore(awayScore + 3)}
        />
        <BottomRowButtons
          down={() => {
            setDown(down === 4 ? 1 : down + 1);
          }}
          quarter={() => {
            setQuarter(quarter === 4 ? alert("Game Over!") : quarter + 1);
          }}
        />
      </section>
    </div>
  );
}

export default App;
