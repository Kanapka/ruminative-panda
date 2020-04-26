import React from 'react';
import './App.css';
import { CameraFeed } from './components/CameraFeed'
import { Grid, ThemeProvider } from '@material-ui/core';
import { ConnectionStatusContainer } from './containers/ConnectionStatusContainer';
import { Status } from './components/Status';
import { Modules } from './components/Modules';
import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#3f51b5' },
  secondary: { main: '#f50057' }
};
const themeName = 'San Marino Razzmatazz Mule';
const theme = createMuiTheme({ palette, themeName });

function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <ThemeProvider theme={theme}>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <ConnectionStatusContainer />
          </Grid>
          <Grid item xs={6}>
            <CameraFeed />
          </Grid>
          <Grid item xs={4}>
            <Status />
          </Grid>
          <Grid item xs={12}>
            <Modules />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
