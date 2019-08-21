/*
  tick() {
  if(this.state.seconds <= 0){
  this.setState(state => ({
  min: state.min - 1,
      seconds: 59
    }));
  }
    this.setState(state => ({
      seconds: state.seconds - 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

*/

import React from "react";
import "./App.css";

const Timer = props => {
  let minutes = props.min;
  let seconds = props.sec;

  return <div className="timer">{`${minutes}:${seconds}`}</div>;
};

export default Timer;
