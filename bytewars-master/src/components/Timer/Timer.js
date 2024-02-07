import React, { useState, useEffect } from 'react';
import moment from 'moment';

function Timer({ countUp, initialTime }) {
  const initialSeconds = moment.duration(initialTime).asSeconds();
  const [time, setTime] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false); // State to control timer activation

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        setIsActive(true); // Activate the timer on 'Enter' key press
      }
    };

    // Add event listener for the 'keydown' event
    document.addEventListener('keydown', handleKeyDown);

    // Remove event listener on cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          // If counting up, just increment. No need to stop.
          if (countUp) {
            return prevTime + 1;
          }
          // If counting down, decrement and stop at 0.
          else {
            if (prevTime <= 0) {
              clearInterval(interval);
              return 0;
            }
            return prevTime - 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    // Clear interval on component unmount or when timer stops
    return () => clearInterval(interval);
  }, [isActive, countUp]);

  // Format the time using moment.js
  const formattedTime = moment.utc(moment.duration(time, 'seconds').asMilliseconds()).format('HH:mm:ss');

  return (
    <div>
      <h2>Timer: {formattedTime}</h2>
    </div>
  );
}

export default Timer;
