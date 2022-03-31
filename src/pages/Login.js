import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { googleSignInInitiate, loginInitiate } from '../redux/action';
import './Login.css';


const Login = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
    });
    const {email, password} = state; //disstructring the state
    const { currentUser} = useSelector ((state) => state.user); //disstructure the current user ; i done this because the rootreducer.js stored with user key // && //to get data from store.js
    
    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    
    const handleGooglesignIn =() =>{
        dispatch(googleSignInInitiate());
    }
    const handleFBsignIn =() =>{}
    

    useEffect(() => {
        if(currentUser){ 
            console.log(currentUser)
          navigate('/')//redirect to homepage
        }
     
      }, [currentUser, navigate])



    const handleSubmit =(e) =>{
        e.preventDefault();
        if (!email || !password) { //if the field are blank
            return;   
            }

          dispatch(loginInitiate (email, password))  ////dispatch used to triggered loginInitiate action and pass the values from input
           setState({email: "",password: ""}) //to empty the field
    }
    

    const handleChange = (e) => { //to handle input states
        let {name, value} = e.target; //disstructure the name & value
        setState({...state, [name]: value });
     }

    return (
        <div>
            <div id="logreg-forms">

                <form className="form-signin" onSubmit={handleSubmit}>

                    <h1
                        className="h3 mb-3 font-weight-normal"
                        style={{ textAlign: "center" }}
                    >
                        Sign in

                    </h1>

                    <div className="social-login">
                        <button
                            className="btn google-btn social-btn"
                            type="button"
                            onClick={handleGooglesignIn}
                        >
                            <span>
                                <i className="fab fa-google-plus-g"></i> Sign in with Google+
                            </span>
                        </button>


                        <button
                            className="btn facebook-btn social-btn"
                            type="button"
                            onClick={handleFBsignIn}
                        >
                            <span>
                                <i className="fab fa-facebook-f"></i> Sign in with Facebook
                            </span>
                        </button>

                    </div>
                    <p style={{textAlign: "center"}}>OR</p>
                    <input
                    type="email"
                    id="inputEmail"
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

                    <button
                        className="btn btn-secondary btn-block"
                        type="submit"
                    >
                     <i className='fas fa-sign-in-alt'></i> Sign In   
                    </button>
                    <hr/>
                    
                    
                    <p>Don't have an account</p>
                    <Link to='/register'>
                    <button
                        className="btn btn-primary btn-block"
                        type="button"
                        id='btn-signup'
                    >
                    <i className='fas fa-user-plus'></i> Sign up New Account
                    </button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login