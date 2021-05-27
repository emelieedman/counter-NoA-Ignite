import { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import DecrementBtn from './components/DecrementBtn/DecrementBtn';
import IncrementBtn from './components/IncrementBtn/IncrementBtn';
import Counter from './components/Counter/Counter';
import RepositoryInfo from './components/RepositoryInfo/RepositoryInfo';
import { getRepos } from './services/github/github';

const useStyles = createUseStyles({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  gridContainer: {
    '@media only screen and (max-width: 769px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '60vh',
      marginTop: '20vh',
    },

    '@media only screen and (min-width: 769px)': {
      display: 'grid',
      gridTemplateRows: '40vh 60vh',
      width: 'max-content',
      height: '98vh',
    },
  },
  subGrid: {
    '@media only screen and (max-width: 769px)': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: ' 40vh',
    },
    '@media only screen and (min-width: 769px)': {
      gridRowStart: 1,
      display: 'grid',
      gridTemplateColumns: 'repeat(3, max-content)',
      alignItems: 'flex-end',
    },
  },
  repoInfo: {
    marginTop: '10vh',
    '@media only screen and (max-width: 769px)': {
      alignSelf: 'center',
    },
  },
});

const repositoryNames = [
  'eslint/eslint',
  'oakwood/front-end-questions',
  'babel/babel',
  'webpack/webpack',
  'storybooks/storybook',
  'facebook/react',
  'reactjs/redux',
  'expressjs/express',
];

function App() {
  const classes = useStyles();
  const [counter, setCounter] = useState(0);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getRepos(repositoryNames).then(setRepos);
  }, []);

  if (!repos.length) return null; // visa loader!!!

  return (
    <div className={classes.flexContainer}>
      <div className={classes.gridContainer}>
        <div className={classes.subGrid}>
          <DecrementBtn
            counter={counter}
            setCounter={setCounter}
            repos={repositoryNames}
          />
          <Counter counter={counter} setCounter={setCounter} />
          <IncrementBtn
            counter={counter}
            setCounter={setCounter}
            repos={repositoryNames}
          />
        </div>
        <div className={classes.repoInfo}>
          <RepositoryInfo repo={repos[counter]} />
        </div>
      </div>
    </div>
  );
}

export default App;
