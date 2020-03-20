import {combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
const reducer =(state:any = {text: ''}, action:any)=>{
    switch(action.type){
        case "ADD_STR":return{
            ...state, text: action.payload
        }
        default: return state;
    }
}
const MainReducer = combineReducers({
    reducer,
    form: formReducer
})


export default MainReducer;