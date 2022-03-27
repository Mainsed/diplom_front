import { connect } from 'react-redux';
import React, { useEffect } from "react";
import Entrant from '../Components/Entrant/Entrant';

const EntrantContainer = (props) => {
  useEffect(() => {
  }, [])
  return (
    <Entrant {...props} />
  )
}

const mapStateToProps = (state) => {
  return {
    language: state.general.language,
    professionList: state.general.professionList,
    programmingLanguages: state.general.programmingLanguages,
  }
}


export default connect(mapStateToProps, {})(EntrantContainer);