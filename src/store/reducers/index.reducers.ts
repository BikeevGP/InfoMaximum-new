import {combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const MainReducer = combineReducers({
    form: formReducer
})

export default MainReducer;