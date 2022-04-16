import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import AdminPanel from '../Components/AdminPanel/AdminPanel';

const AdminPanelContainer = (props) => {
  useEffect(() => {
  }, []);
  return (
    <AdminPanel {...props} />
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.general.language,
    partnersEmploymentInfo: state.general.partnersEmploymentInfo,
    employmentMaterials: state.general.employmentMaterials,
    faqList: state.general.faqList,
    professionList: state.general.professionList,
    programmingLanguages: state.general.programmingLanguages,
  };
};


export default connect(mapStateToProps, {})(AdminPanelContainer);