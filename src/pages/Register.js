import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { registerInitiate } from '../redux/action';
import './Register.css';

export const Register = () => {
    const [state, setState] = useState({
        displayName: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });

    const { currentUser} = useSelector ((state) => state.user); //disstructure the current user ; i done this because the rootreducer.js stored with user key // && //to get data from store.js
    const navigate = useNavigate();

    useEffect(() => {
      if(currentUser){ 
          console.log(currentUser)
        navigate('/')//redirect to homepage
      }
   
    }, [currentUser, navigate])


    const dispatch = useDispatch();

    const { displayName, email, password, passwordConfirm } = state; //disstructring the state

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) { //if not matching i dont want to execut the below code
            return;   
            }

          dispatch(registerInitiate (email, password, displayName))  ////dispatch used to triggered registerInitiate action and pass the values from input
           setState({email: "", displayName: "", password: "", passwordConfirm: ""}) //to empty the field
     };

    const handleChange = (e) => { //to handle input states
        let {name, value} = e.target; //disstructure the name & value
        setState({...state, [name]: value });

     }

    
     


    return (
        <div>
            <div id="register-form">

                <form className="form-signup" onSubmit={handleSubmit}>

                    <h1
                        className="h3 mb-3 font-weight-normal"
                        style={{ textAlign: "center" }}
                    >
                        Sign up

                    </h1>

                    <input
                        type="text"
                        id="displayName"
                        className='form-control'
                        placeholder='Full Name'
                        name='displayName'
                        required

                        onChange={handleChange}
                        value={displayName}
                    />

                    <input
                        type="email"
                        id="user-email"
                        className='form-control'
                        placeholder='Email Address'
                        name='email'
                        required

                        onChange={handleChange}
                        value={email}
                    />

                    <input
                        type="password"
                        id="inputPassword"
                        className='form-control'
                        placeholder='Password'
                        name='password'
                        required

                        onChange={handleChange}
                        value={password}
                    />

                    <input
                        type="password"
                        id="passwordConfirm"
                        className='form-control'
                        placeholder='Repat Password'
                        name='passwordConfirm'
                        required

                        onChange={handleChange}
                        value={passwordConfirm}
                    />

                    <button
                        className="btn btn-primary btn-block"
                        type="submit"
                    >
                        <i className='fas fa-user-plus'></i> Sign Up
                    </button>

                    <Link to='/login'> 
                    {/*for navigat back to login pg  */}
                    <i className='fas fa-angle-left'></i> Back
                    </Link>

                </form>
            </div>

        </div>
    )
}


// ******* //useDispatch():
// useDispatch() hook is equivalent of mapDispatchToProps.

// We will invoke useDispatch and store it to a variable, dispatch. This hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.
// And we dispatch it by calling dispatch passing in the return value from the action creator.
//dispatch(addTodo(inputData)) //passing inputData inside addTodo because inside this i have the userinput ; then this method goes to action.js ; after going to action.js it check which func. is called(addTodo) ; then it check the type :ADD_TODO ;
// after that  this "addTodo" goes to reducer 


// useSelector is a function that takes the current state as an argument and returns whatever data you want from it and it allows you to store the return values inside a variable within the scope of you functional components instead of passing down as props
//      https://dev.to/bangash1996/introduction-react-redux-using-hooks-useselector-usedispatch-26ch