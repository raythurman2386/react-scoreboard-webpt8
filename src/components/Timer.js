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

import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// custom useInterval hook setup
function useInterval(callback, delay) {
	const savedCallback = useRef();

	// Remember the latest callback.
	useEffect(
		() => {
			savedCallback.current = callback;
		},
		[ callback ],
	);

	// Set up the interval.
	useEffect(
		() => {
			function tick() {
				savedCallback.current();
			}
			if (delay !== null) {
				let id = setInterval(tick, delay);
				return () => clearInterval(id);
			}
		},
		[ delay ],
	);
}

const Timer = (props) => {
	// hook for the timer
	const [ minutes, setMinutes ] = useState(10);
	const [ seconds, setSeconds ] = useState(0);

	// useInterval for the timer
	useInterval(() => {
		seconds <= 0 ? setMinutes(minutes - 1) && setSeconds(59) : setSeconds(seconds - 1);
	}, 1000);

	return <div className='timer'>{`${minutes}:${seconds}`}</div>;
};

export default Timer;
