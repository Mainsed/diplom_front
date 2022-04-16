import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import Footer from '../Components/Footer/Footer';
import { setLanguage } from '../Redux/generalReducer';

const FooterContainer = (props) => {
  useEffect(() => {
  }, []);
  return (
    <Footer {...props} />
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.general.language,
  };
};


export default connect(mapStateToProps, {setLanguage})(FooterContainer);