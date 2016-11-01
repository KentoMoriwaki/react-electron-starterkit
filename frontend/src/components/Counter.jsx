import React, { Component, PropTypes } from 'react';
import styles from './Counter.css';

export const Counter = ({ count, onClick, onSave }) => (
  <div className={styles.base}>
    <div className={styles.header}>
      <h2>Welcome to React</h2>
    </div>
    <p
      className={styles.intro}
      onClick={onClick}
    >
      Clicked: { count }!
    </p>
    <div>
      <button onClick={onSave}>
        Save!
      </button>
    </div>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default Counter;
