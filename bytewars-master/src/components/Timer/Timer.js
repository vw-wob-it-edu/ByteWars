import React, { useState, useEffect } from 'react';
import moment from 'moment';

function Timer({ countUp, initialTime }) {
  // Parse initialTime and convert it to seconds
  const initialSeconds = moment.duration(initialTime).asSeconds();
  const [time, setTime] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
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

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [countUp]);

  // Format the time using moment.js
  const formattedTime = moment.utc(moment.duration(time, 'seconds').asMilliseconds()).format('HH:mm:ss');

  return (
    <div>
      <h2>Timer: {formattedTime}</h2>
    </div>
  );
}

export default Timer;
