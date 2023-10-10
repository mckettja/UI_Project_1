import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';

const sound = new Howl({
  src: ['smart-desk-ui/data/timerAlarm.mp3'], // Replace with the path to your sound file
  volume: 1,
});

function Timer() {
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(interval);
          sound.play();
        } else {
          if (seconds === 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          } else {
            setSeconds((prevSeconds) => prevSeconds - 1);
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [minutes, seconds, isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(10);
    setSeconds(0);
  };

  const handleSelectChange = (e) => {
    const selectedMinutes = parseInt(e.target.value);
    setMinutes(selectedMinutes);
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div className="timer-container">
      <h1 className='timer-label'>Engagement Timer</h1>
      <div className="time-display">
        {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
      </div>
      <div className="controls">
        <select onChange={handleSelectChange} value={minutes} className='timer-dropdown'>
          <option value="1">1 minutes</option>
          <option value="10">10 minutes</option>
          <option value="20">20 minutes</option>
          <option value="30">30 minutes</option>
          <option value="45">45 minutes</option>
          <option value="60">60 minutes</option>
        </select>
        <button onClick={startTimer} disabled={isRunning} className='timer-button'>
          Start
        </button>
        <button onClick={stopTimer} disabled={!isRunning} className='timer-button'>
          Stop
        </button>
        <button onClick={resetTimer} disabled={isRunning} className='timer-button'>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;