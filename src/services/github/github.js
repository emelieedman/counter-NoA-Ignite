export const getRepo = (repositoryName) => {
  return fetch(`https://api.github.com/repos/${repositoryName}`).then((data) =>
    data.json()
  );
};

export const getRepos = async (repositoryNames) => {
  if (localStorage.getItem('repos') === null) {
    return Promise.all(repositoryNames.map(getRepo)).then((repos) => {
      localStorage.setItem('repos', JSON.stringify(repos));
      return repos;
    });
  } else {
    return JSON.parse(localStorage.getItem('repos'));
  }
};
