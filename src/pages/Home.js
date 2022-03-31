import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from '../redux/action';

export const Home = () => {
    const { currentUser } = useSelector((state) => state.user); //disstructure the current user ; i done this because the rootreducer.js stored with user key // && //to get data from store.js
    const dispatch = useDispatch();

    const handleAuth = () => {
        if (currentUser) {
            dispatch(logoutInitiate())  ////dispatch used to triggered loginInitiate action and pass the values from input
        }
    }

    return (
        <div className='mt-5'>
            <h2>Welcome to My Page</h2>
            <br />
            <button className='btn btn-danger' onClick={handleAuth}>Logout</button>
        </div>
    )
}
