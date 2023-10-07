import React, { useState, useEffect } from 'react';

function LiveClock() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString();
  const formattedTime = currentDateTime.toLocaleTimeString();

  return (
    <div>
      <p>{formattedDate}</p>
      <p>{formattedTime}</p>
    </div>
  );
}

export default LiveClock;