
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
    temperature: '',
    pressure: '',
    humidity: '',
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
          value={state && state.temperature || ''}
          readOnly={false}
          onChange={inputChangeHandler} />
        <OutlinedTextField
          className={classes.item}
          name='pressure'
          placeholder='Air pressure'
          value={state && state.pressure || ''}
          readOnly={false}
          onChange={inputChangeHandler} />
        <OutlinedTextField
          className={classes.item}
          name='humidity'
          placeholder='Humidity'
          value={state && state.humidity || ''}
          readOnly={false}
          onChange={inputChangeHandler} />
      </div>
    </div>
  );
};

export default LandingPage;
