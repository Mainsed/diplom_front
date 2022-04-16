import {combineReducers, createStore} from 'redux';
import generalReducer from './generalReducer';

const reducers = combineReducers({
    general: generalReducer,
});

const store = createStore(reducers);

export default store;