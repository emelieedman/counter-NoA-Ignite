import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  btn: {
    margin: '5%',
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
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
    },
  },
});

const DecrementBtn = () => {
  const classes = useStyles();
  return <button className={classes.btn}>- decrement</button>;
};

export default DecrementBtn;
