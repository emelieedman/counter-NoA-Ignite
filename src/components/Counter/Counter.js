import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  counter: {
    fontSize: 24,
  },
});

const Counter = ({ counter }) => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.counter}>Counter: {counter}</h1>
    </div>
  );
};

export default Counter;
