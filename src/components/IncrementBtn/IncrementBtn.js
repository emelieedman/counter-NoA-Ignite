import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  btn: {
    border: 'none',
    width: 240,
    height: 60,
    borderRadius: 50,
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: 'hotpink',
    transition: '0.5s ease',
    '&:hover': {
      backgroundColor: 'rebeccapurple',
      transition: '0.5s ease',
    },
  },
});

const IncrementBtn = ({ counter, setCounter, repos }) => {
  const classes = useStyles();
  console.log(counter);

  const onIncrement = () => {
    if (counter < repos.length - 1) {
      setCounter(counter + 1);
    }
  };

  return (
    <button className={classes.btn} onClick={() => onIncrement()}>
      + increment
    </button>
  );
};

export default IncrementBtn;
