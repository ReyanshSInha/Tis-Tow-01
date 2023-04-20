import React, { useState, useEffect } from "react";

function TimeTracker(props) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds === 59) {
        setSeconds(0);
        setMinutes((prevMinutes) => prevMinutes + 1);
      } else {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  const handleReset = () => {
    setSeconds(0);
    setMinutes(0);
  };

  props.handleTimerReset(handleReset)

  return (
    <div>
      <h2>Timer:</h2>
      <p>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </p>
      {/* <button onClick={handleReset}>Reset</button> */}
    </div>
  );
}

export default TimeTracker;

