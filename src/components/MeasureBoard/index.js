
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedTextField from 'components/UI/OutlinedTextField';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '50%'
  },
  board: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    padding: theme.spacing(1.5),
    margin: theme.spacing(2)
  }
}));

const LandingPage = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    temperature: 'N / A',
    pressure: 'N / A',
    humidity: 'N / A',
  });

  const inputChangeHandler = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <div className={classes.board}>
        <OutlinedTextField
          className={classes.item}
          name='temperature'
          placeholder='Temperature'
          value={state.temperature}
          readOnly={true}
          onChange={inputChangeHandler} />
        <OutlinedTextField
          className={classes.item}
          name='pressure'
          placeholder='Air pressure'
          value={state.pressure}
          readOnly={true}
          onChange={inputChangeHandler} />
        <OutlinedTextField
          className={classes.item}
          name='humidity'
          placeholder='Humidity'
          value={state.humidity}
          readOnly={true}
          onChange={inputChangeHandler} />
      </div>
    </div>
  );
};

export default LandingPage;
