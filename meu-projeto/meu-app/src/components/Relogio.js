import React, { useState, useEffect } from 'react';

export function Relogio() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`;

  return (
    <div className='containerRelogio'>
      <div className='carRelogio'>
        <di>
          {/* <h1>Relógio e Data</h1> */}
          <h2>{formattedDate}</h2>
        </di>
      </div>
    </div>
  );

}

export default Relogio;
