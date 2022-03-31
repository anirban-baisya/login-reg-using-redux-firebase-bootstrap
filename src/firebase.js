// firebase configration setup

// import {initializeApp} from "firebase/app";
// import { getFirestore } from "firebase/firestore";

import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
// import "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIM9zTidoudwbw4-QNUZV89FNad-GWagc",
    authDomain: "login-reg-using-redux-firebase.firebaseapp.com",
    projectId: "login-reg-using-redux-firebase",
    storageBucket: "login-reg-using-redux-firebase.appspot.com",
    messagingSenderId: "47207131630",
    appId: "1:47207131630:web:9d591ef93ab350cf2886ff"
  };

  // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const fireDB = getFirestore(app)

  // const auth = firebase.auth(); //for normal login
  const googleAuthProvider = new GoogleAuthProvider(); //for login using google
  const facebookAuthProvider = new FacebookAuthProvider(); // for login using firebase

  // export { googleAuthProvider, facebookAuthProvider, fireDB };
  export { googleAuthProvider, facebookAuthProvider, firebaseConfig };
