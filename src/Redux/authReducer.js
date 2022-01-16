const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    loginError: null,
    initialized: false,
};

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS',
    SET_USER_DATA = 'SET_USER_DATA'

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            };
        }
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const initializedSuccess = () => {
    return {type: INITIALIZED_SUCCESS}
}

export const initializeApp = () => (dispatch) => {
    const userDataPromise = dispatch(getUserData());
    Promise.all([userDataPromise]).then(() => dispatch(initializedSuccess()));
}

export const setUserData = (userId, email, login, isAuth) => {
    return {type: SET_USER_DATA, data: {userId, email, login, isAuth}}
}

export const getUserData = () => async dispatch => {
    //const resp = 
    // if (resp.data.resultCode === 0) {
    //     const {id, login, email} = resp.data.data;
    //     dispatch(setUserData(id, email, login, true));
    // }
}

export default authReducer;