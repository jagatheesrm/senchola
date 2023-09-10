import React from 'react'
// import { useAuth } from './auth';
import { Navigate } from 'react-router-dom';

const ProtectdRoute = ({ children }) => {

  const loginToken=localStorage.getItem("token");
    if (!loginToken) {
    return <Navigate to="/login" />
  }
  return children


}

export default ProtectdRoute;