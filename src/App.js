import React from 'react';
import './App.css';
import RouteController from './Components/RouteController/RouteController';
import FooterContainer from './Containers/FooterContainer';
import HeaderContainer from './Containers/HeaderContainer';
import { Grid } from '@mui/material';
const App = () => <Grid container className='app'>
  <Grid item xs={12}><HeaderContainer /></Grid>
  <Grid item xs={12}>
    <Grid container className='app' alignItems='center'>
      <div className='appWrap'>
        <RouteController />
      </div>
    </Grid>
  </Grid>
  <Grid item xs={12}>
    <Grid container className='app' alignItems='flex-end'>
      <div className='appWrap'>
        <FooterContainer />
      </div>
    </Grid>
  </Grid>
</Grid>;

export default App;
