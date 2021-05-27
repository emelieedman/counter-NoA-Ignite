import { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import DecrementBtn from './components/DecrementBtn/DecrementBtn';
import IncrementBtn from './components/IncrementBtn/IncrementBtn';
import Counter from './components/Counter/Counter';
import RepositoryInfo from './components/RepositoryInfo/RepositoryInfo';
import { getRepos } from './services/github/github';

const useStyles = createUseStyles({
  wrapper: {
    margin: {
      left: '20vw',
      right: '20vw',
    },
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(300px, 20vw))',
    width: '60vw',
    height: '98vh',
    alignItems: 'center',
    justifyItems: 'center',
  },
  repoInfo: {
    gridColumnStart: 2,
  },
 
   // Extra small devices (phones, 600px and down) 
'@media only screen and (max-width: 600px)': {...},

/* Small devices (portrait tablets and large phones, 600px and up) */
'@media only screen and (min-width: 600px)': {...},

/* Medium devices (landscape tablets, 768px and up) */
'@media only screen and (min-width: 768px)': {...},

/* Large devices (laptops/desktops, 992px and up) */
'@media only screen and (min-width: 992px)': {...},

/* Extra large devices (large laptops and desktops, 1200px and up) */
'@media only screen and (min-width: 1200px)': {...}, 
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
    <div className={classes.wrapper}>
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
      <div className={classes.repoInfo}>
        <RepositoryInfo repo={repos[counter]} />
      </div>
    </div>
  );
}

export default App;
