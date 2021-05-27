import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: '150px 50px',
    gridTemplateRows: '1fr',
  },
  counter: {
    display: 'flex',
    fontSize: 24,
    gridColumnStart: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  number: {
    margin: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    fontSize: 24,
  },
});

const Counter = ({ counter }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.counter}>Counter:</h1>
      <p className={classes.number}>{counter}</p>
    </div>
  );
};

export default Counter;
