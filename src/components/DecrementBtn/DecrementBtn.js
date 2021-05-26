import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  btn: {
    border: '1px solid black',
    width: 240,
    height: 60,
    borderRadius: 50,
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: 'black',
    backgroundColor: 'white',
    transition: '0.5s ease',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
      transition: '0.5s ease',
    },
  },
});

const DecrementBtn = ({ counter, setCounter }) => {
  const classes = useStyles();

  const onDecrement = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <button className={classes.btn} onClick={() => onDecrement()}>
      - decrement
    </button>
  );
};

export default DecrementBtn;
