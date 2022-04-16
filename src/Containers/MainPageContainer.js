import { connect } from 'react-redux';
import React from 'react';
import MainPage from '../Components/MainPage/MainPage';

const MainPageContainer = (props) => {
  return (
    <MainPage {...props} />
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.general.language,
  };
};


export default connect(mapStateToProps, {})(MainPageContainer);