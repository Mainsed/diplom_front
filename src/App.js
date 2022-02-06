import React from 'react'
import './App.css';
import RouteController from './Components/RouteController/RouteController'
import FooterContainer from './Containers/FooterContainer';
import HeaderContainer from './Containers/HeaderContainer';
const App = () => <div>
  <HeaderContainer />
  <RouteController />
  <FooterContainer/>
</div>

export default App;
