import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import DecrementBtn from './components/DecrementBtn/DecrementBtn';
import IncrementBtn from './components/IncrementBtn/IncrementBtn';
import Counter from './components/Counter/Counter';
import RepositoryInfo from './components/RepositoryInfo/RepositoryInfo';

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
});

const repos = [
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

  return (
    <div className={classes.wrapper}>
      <DecrementBtn counter={counter} setCounter={setCounter} repos={repos} />
      <Counter counter={counter} setCounter={setCounter} />
      <IncrementBtn counter={counter} setCounter={setCounter} repos={repos} />
      <RepositoryInfo repositoryName={repos[counter]} />
    </div>
  );
}

export default App;
