
import React from 'react';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax'
import { map, catchError } from 'rxjs/operators'
import { makeStyles } from '@material-ui/core/styles';

import { BACKEND_HTTP_URL } from 'config';
import MeasureBoard from 'components/MeasureBoard';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: theme.custom.layout.topAreaHeight,
    height: `calc(100vh - ${theme.custom.layout.topAreaHeight + theme.custom.layout.footerAreaHeight}px)`
  },
  body: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  const observable$ = ajax.getJSON(BACKEND_HTTP_URL)
    .pipe(
      map(response => response),
      catchError(error => of(error))
    )
  console.log("observable=>", observable$)

  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <MeasureBoard />
      </div>
    </div>
  );
};

export default Layout;