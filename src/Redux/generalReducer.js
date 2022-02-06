const initialState = {
    language: 1,
};

const SET_LANGUAGE = 'SET_LANGUAGE';

const generalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANGUAGE: {
            return {
                ...state,
                ...action.data
            };
        }
        default:
            return state;
    }
}

export const setLanguage = (language) => {
    return {type: SET_LANGUAGE, data: { language }}
}

export const getUserData = () => async dispatch => {
    //const resp = 
    // if (resp.data.resultCode === 0) {
    //     const {id, login, email} = resp.data.data;
    //     dispatch(setUserData(id, email, login, true));
    // }
}

export default generalReducer;