// 2nd step
// here i have to write all the actions that is i have perform after clicking onthe buttons
//in this app i have to define 3 actions (add,delet,clearall)



import * as types from "./actionTypes"; //bringing all actions from actionTypes
import { googleAuthProvider } from "../firebase";
import firebase from 'firebase/compat/app';
// initializing firebaseConfig globally inside app.js so that i dont need to call it in every file
import 'firebase/compat/auth';


// ------ REGISTER ACTION WITH DEFINATION
const registerStart = () => ({

    type: types.REGISTER_START, //here i have to define what i have to perform / action Type

});

const registerSuccess = (user) => ({ //it will also recive a user after reg api succesed
    type: types.REGISTER_SUCCESS,
    payload: user, //passing the user to reducer

});

const registerFail = (error) => ({

    type: types.REGISTER_FAIL,
    payload: error,

});




// ------ LOGIN ACTION WITH DEFINATION
const loginStart = () => ({

    type: types.LOGIN_START, //here i have to define what i have to perform / action Type

});

const loginSuccess = (user) => ({ //it will also recive a user after reg api succesed
    type: types.LOGIN_SUCCESS,
    payload: user, //passing the user to reducer

});

const loginFail = (error) => ({

    type: types.LOGIN_FAIL,
    payload: error,

});



//// ------ LOGOUT ACTION WITH DEFINATION
const logoutStart = () => ({
    type: types.LOGOUT_START, //here i have to define what i have to perform / action Type

});

const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS
});

const logoutFail = (error) => ({

    type: types.LOGOUT_FAIL,
    payload: error,
});




//// ------ LOGIN ACTION WITH GOOGLE+
const googleSignInStart = () => ({
    type: types.GOOGLE_SIGN_IN_START, //here i have to define what i have to perform / action Type

});

const googleSignInSuccess = (user) => ({
    type: types.GOOGLE_SIGN_IN_SUCCESS,
    payload: user,
});

const googleSignInFail = (error) => ({

    type: types.GOOGLE_SIGN_IN_FAIL,
    payload: error,
});




//this func. used for dispatching our action
export const registerInitiate = (email, password, displayName) => {
    //^^ it will recive email, password, displayName from Register.js line 39
    return function (dispatch) { //dispatch used for dispatch new action
        dispatch(registerStart());
        firebase.auth().createUserWithEmailAndPassword(email, password) //it create a user with email & pass
            .then(({ user }) => { //once it create a user with email& pass then it will give a ({user})
                user.updateProfile({ //because once it create a user with email & pass in firebase then display name will be null that why i update it
                    displayName,
                });
                console.log("user", user)

                dispatch(registerSuccess(user));

            }).catch((error) => {
                console.log(error)
                dispatch(registerFail(error.message)
                )
            });

    };

};



export const loginInitiate = (email, password) => {
    //^^ it will recive email, password from login.js
    return function (dispatch) { //dispatch used for dispatch new action

        dispatch(loginStart());
        firebase.auth().signInWithEmailAndPassword(email, password) //it create a user with email & pass
            .then(({ user }) => {

                console.log("user", user)

                dispatch(loginSuccess(user));

            }).catch((error) => {
                console.log(error)
                dispatch(loginFail(error.message)
                )
            });
    };
};


export const googleSignInInitiate = () => {
    return function (dispatch) { //dispatch used for dispatch new action

        dispatch(googleSignInStart());
        firebase.auth().signInWithPopup(googleAuthProvider) //it for google+ sign in
            .then((res) => {
                console.log('profile', res.additionalUserInfo.profile)
                dispatch(googleSignInSuccess({
                    user: {
                        currentUser: res.additionalUserInfo.profile
                    }
                }));

            }).catch((error) => {
                console.log(error)
                dispatch(googleSignInFail(error.message)
                )
            });
    };
};



export const logoutInitiate = () => {
    return function (dispatch) { //dispatch used for dispatch new action

        dispatch(logoutStart());
        firebase.auth().signOut() //signOut is a firebase method for logout
            .then((resp) => {

                dispatch(logoutSuccess());

            }).catch((error) => {
                console.log(error)
                dispatch(logoutFail(error.message)
                )
            });
    };
};