import React from 'react';

import styles from './index.module.scss';

const NUMBERS = {
  1: [5, 6],
  2: [1, 3, 4, 6, 7],
  3: [1, 4, 5, 6, 7],
  4: [2, 5, 6, 7],
  5: [1, 2, 4, 5, 7],
  6: [1, 2, 3, 4, 5, 7],
  7: [1, 5, 6],
  8: [1, 2, 3, 4, 5, 6, 7],
  9: [1, 2, 5, 6, 7],
  0: [1, 2, 3, 4, 5, 6],
};

const Digit = (props) => {
  const { value } = props;

  // render
  return (
    <div className={styles.container}>
       {
         [...Array(7).keys()].map((item) => (
           <div
            key={`digit-${item}`}
            className={`${styles.segment} ${NUMBERS[value].includes(item + 1) ? styles.segment__active : ''}`}
          />
         ))
       }
    </div>
  );
}

export default Digit;
