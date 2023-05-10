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
      <h1>Relógio</h1>
      <h2>{time}</h2>
    </div>
  );
}

export default Relogio;
