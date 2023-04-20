import React, { useState, useEffect } from 'react';

const Timer = (props) => {
  
    
  const [timeLeft, setTimeLeft] = useState(props.duration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [props.duration]);

  const minutesLeft = Math.floor(timeLeft / 60);
  const secondsLeft = timeLeft % 60;

  const timesUpHandler = () => {
    let timerData = {resultState: true, quizState: false}
    props.timerDataCollector(timerData)
  }

  return (
    <div className='det'>
      {timeLeft <= 0 ? (
        timesUpHandler()
      ) : (
        <div>
          {minutesLeft}:{secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft} remaining
        </div>
      )}
    </div>
  );
}

export default Timer;