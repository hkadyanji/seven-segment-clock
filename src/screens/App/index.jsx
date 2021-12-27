import React, { useEffect, useState } from 'react';

import Digit from '../../components/Digit';

import styles from './index.module.scss';

const App = () => {
  // state
  const [hours, setHours] = useState([]);
  const [minutes, setMinutes] = useState([]);
  const [seconds, setSeconds] = useState([]);

  // effects
  useEffect(() => {
    const interval = setInterval(() => {
      const dt = new Date();
      setHours(`${dt.getHours()}`.padStart(2, '0').split(''));
      setMinutes(`${dt.getMinutes()}`.padStart(2, '0').split(''));
      setSeconds( `${dt.getSeconds()}`.padStart(2, '0').split(''));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // render
  return (
    <div className={styles.container}>
      {
        hours.map((hour, idx) => (
          <Digit
            key={`hour-${idx}`}
            value={hour}
          />
        ))
      }
      {
        minutes.map((minute, idx) => (
          <Digit
            key={`minute-${idx}`}
            value={minute}
          />
        ))
      }
      {
        seconds.map((second, idx) => (
          <Digit
            key={`second-${idx}`}
            value={second}
          />
        ))
      }
    </div>
  );
}

export default App;
