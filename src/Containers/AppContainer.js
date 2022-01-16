import {initializeApp} from '../Redux/authReducer.js'
import {connect} from 'react-redux';
import React from "react";
import App from "../App";

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth,
        initialized: state.auth.initialized
    }
}

class AppContainer extends React.Component{
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        return <App {...this.props}/>
    }
}

export default connect(mapStateToProps,{initializeApp})(AppContainer)