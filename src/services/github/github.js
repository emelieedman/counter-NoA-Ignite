export const getRepo = (repositoryName) => {
  return fetch(`https://api.github.com/repos/${repositoryName}`).then((data) =>
    data.json()
  );
};
