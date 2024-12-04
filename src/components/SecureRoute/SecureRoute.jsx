import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const SecureRoute = () => {
    const isLoggedIn = JSON.parse(sessionStorage.getItem('isLoggedIn')) || false;
    // console.log(isLoggedIn);
  return(
    <>
        {isLoggedIn ? <Outlet/> : <Navigate to="/login" />}
    </>
  )
}

export default SecureRoute