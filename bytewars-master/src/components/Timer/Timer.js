import React, { useState, useEffect } from 'react';

function Timer({ initialSeconds }) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    // Check if the timer is active
    if (seconds > 0) {
      // Set a timeout to decrease the seconds by 1 every 1000ms (1 second)
      const timerId = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);

      // Clear the timeout if the component is unmounted or the timer reaches 0
      return () => clearTimeout(timerId);
    }
  }, [seconds]);

  return (
    <div>
      <h2>Timer: {seconds} Seconds</h2>
    </div>
  );
}

export default Timer;