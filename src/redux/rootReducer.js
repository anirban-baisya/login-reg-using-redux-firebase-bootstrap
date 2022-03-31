// 4th step
//this is to tagel multiple reducer

import userReducer from './reducer'; 

import {combineReducers} from 'redux';

const rootReducer = combineReducers ({
    //trying to access the state what ever we have withe help of user key
    user: userReducer //if i have more then one reducer then i need to just add all the reducer one by one here after importing
})

export default rootReducer ;