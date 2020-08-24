
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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

  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <MeasureBoard />
      </div>
    </div>
  );
};

export default Layout;