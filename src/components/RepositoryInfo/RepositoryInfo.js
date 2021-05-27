import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    width: '43vw',
    '@media only screen and (max-width: 769px)': {
      width: '60vw',
    },
  },
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
    <div className={classes.container}>
      {repo.full_name && repo.description && repo.stargazers_count ? (
        <h2 className={classes.fullName}>{repo.full_name}</h2>
      ) : (
        <h2>Error: This repository could not be found..</h2>
      )}
      <p className={classes.description}>{repo.description}</p>
      {repo.stargazers_count ? (
        <p className={classes.stars}>&#127775;{repo.stargazers_count}</p>
      ) : null}
    </div>
  );
};

export default RepositoryInfo;
