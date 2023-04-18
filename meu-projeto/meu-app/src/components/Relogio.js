import React, { useState, useEffect } from 'react';

export function Relogio() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div>
      <h1>Relogio</h1>
      <h2>It is {time}.</h2>
    </div>
  );
}

export default Relogio;
