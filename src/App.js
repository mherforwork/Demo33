
import 'typeface-roboto';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import LandingPage from 'containers/LandingPage';
import Layout from 'hoc/Layout';
import theme from 'styles/theme';
import { AppContext } from 'contexts';

const App = () => {

  return (
    <AppContext.Provider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <LandingPage />
        </Layout>
      </ThemeProvider>
    </AppContext.Provider>
  )
};

export default App;