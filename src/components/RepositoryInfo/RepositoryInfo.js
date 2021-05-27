import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  fullName: {
    fontSize: 28,
  },
  description: {
    fontSize: 18,
  },
  stars: {
    fontSize: 16,
    fontWeight: 'bolder',
  },
});

const RepositoryInfo = ({ repo }) => {
  const classes = useStyles();

  return (
    <div>
      <h2 className={classes.fullName}>{repo.full_name}</h2>
      <p className={classes.description}>{repo.description}</p>
      <p className={classes.stars}>&#127775;{repo.stargazers_count}</p>
    </div>
  );
};

export default RepositoryInfo;
