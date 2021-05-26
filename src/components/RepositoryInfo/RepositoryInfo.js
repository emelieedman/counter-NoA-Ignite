import React, { useEffect, useState } from 'react';
import { getRepo } from '../../services/github/github';

const RepositoryInfo = ({ repositoryName }) => {
  const [repo, setRepo] = useState();

  useEffect(() => {
    getRepo(repositoryName).then(setRepo);
  }, [repositoryName]);

  if (!repo) return null;

  return <div>{repo.name}</div>;
};

export default RepositoryInfo;
