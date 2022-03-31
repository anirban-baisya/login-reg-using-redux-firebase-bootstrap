//this is to make home screen proctive
import React from 'react';
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Layout() {
    // const loggedIn = localStorage.getItem('isLoggedIn');
    const { currentUser } = useSelector((state) => state.user); //disstructure the current user ; i done this because the rootreducer.js stored with user key // && //to get data from store.js

    return (
        <>
             {currentUser ? <Outlet /> : <Navigate to="/login" />} {/*if condition is satisfied it calles the <Layout> routes once more by using <Outlet /> & print the element routes inside the layout wrapper  */}
        </>
    );
}

export default Layout;
