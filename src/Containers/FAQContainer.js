import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import FAQ from '../Components/FAQ/FAQ';

const FAQContainer = (props) => {
  useEffect(() => {
  }, []);
  return (
    <FAQ {...props} />
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.general.language,
    faqList: state.general.faqList,
  };
};


export default connect(mapStateToProps, {})(FAQContainer);