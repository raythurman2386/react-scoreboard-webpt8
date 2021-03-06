import React from "react";
import Timer from "./Timer";
import "./App.css";

const TopRow = props => {
  return (
    <div className="topRow">
      <div className="home">
        <h2 className="home__name">{props.homeName}</h2>

        {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

        <div className="home__score">{props.home}</div>
      </div>
      <Timer min={props.min} sec={props.sec} />
      <div className="away">
        <h2 className="away__name">{props.awayName}</h2>
        <div className="away__score">{props.away}</div>
      </div>
    </div>
  );
};

export default TopRow;
