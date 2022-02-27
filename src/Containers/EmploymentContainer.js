import { connect } from 'react-redux';
import React, { useEffect } from "react";
import Employment from '../Components/Employment/Employment';

const EmploymentContainer = (props) => {
  useEffect(() => {
  }, [])
  return (
    <Employment {...props} />
  )
}

const mapStateToProps = (state) => {
  return {
    language: state.general.language,
    partnersEmploymentInfo: state.general.partnersEmploymentInfo,
    employmentMaterials: state.general.employmentMaterials,
  }
}


export default connect(mapStateToProps, {})(EmploymentContainer);