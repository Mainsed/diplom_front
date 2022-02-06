import { connect } from 'react-redux';
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Header from '../Components/Header/Header';
import { setLanguage } from '../Redux/generalReducer';

const HeaderContainer = (props) => {
  useEffect(() => {
  }, [])
  return (
    <Header {...props} />
  )
}

const mapStateToProps = (state) => {
  return {
    language: state.general.language,
  }
}


export default connect(mapStateToProps, {setLanguage})(HeaderContainer);