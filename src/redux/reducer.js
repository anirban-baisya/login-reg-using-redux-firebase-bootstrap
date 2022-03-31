// 3rd step
//after performing action who will add item into the list that is take care by reducer
// here i have to define the different actions ; reducer hold the current state & action

import * as types from "./actionTypes"; //bringing all actions from actionTypes


const initialState= { 
    loading: false,
    currentUser: null,
    error: null,
};


const userReducer =(state= initialState, action) =>{

    switch (action.type) {
      case types.REGISTER_START:
      case types.LOGIN_START:  //here i writing this case because LOGIN_START return the same state that 
      case types.LOGOUT_START:  
      case types.GOOGLE_SIGN_IN_START:  
        return {
          ...state, //geting initialState(previous state) //...state deap cloaning (cloaning of the  actual state ) 
          loading: true,
        };

      case types.LOGOUT_SUCCESS:  //i writng this state seperatly because i have to perform deferent action
        return {
          ...state, //geting initialState(previous state) //...state deap cloaning (cloaning of the  actual state ) 
          currentUser: null
        };

      case types.REGISTER_SUCCESS:
      case types.LOGIN_SUCCESS:
      case types.GOOGLE_SIGN_IN_SUCCESS:  
        return {
          ...state,
          loading: false,
          currentUser: action.payload,
        };
      case types.REGISTER_FAIL:
      case types.LOGIN_FAIL:
      case types.GOOGLE_SIGN_IN_FAIL:

        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }

};


export default userReducer ;