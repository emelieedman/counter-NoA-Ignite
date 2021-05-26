import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  btn: {
    margin: '5%',
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
    '&:hover': {
      backgroundColor: 'rebeccapurple',
    },
  },
});

const IncrementBtn = () => {
  const classes = useStyles();
  return <button className={classes.btn}>+ increment</button>;
};

export default IncrementBtn;
