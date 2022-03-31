// 1 step
//in future if i need any changes in actiontypes names we can directly change it in actionTypes.js file that why we need actionTypes.js file , other wise we have to manually change the action name from every file 
// here i have to just write all the actions names

// Actions types for register
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";


// Actions types for login
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";


// Actions types for logout
export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";


// Actions types for google+ login
export const GOOGLE_SIGN_IN_START = "GOOGLE_SIGN_IN_START";
export const GOOGLE_SIGN_IN_SUCCESS = "GOOGLE_SIGN_IN_SUCCESS";
export const GOOGLE_SIGN_IN_FAIL = "GOOGLE_SIGN_IN_FAIL";