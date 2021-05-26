import { createUseStyles } from 'react-jss';
import DecrementBtn from './components/DecrementBtn/DecrementBtn';
import IncrementBtn from './components/IncrementBtn/IncrementBtn';

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <DecrementBtn />
      <IncrementBtn />
    </div>
  );
}

export default App;
