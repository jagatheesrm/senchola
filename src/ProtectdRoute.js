import React from 'react'
import { useAuth } from './auth';
import { Navigate } from 'react-router-dom';

const ProtectdRoute = ({children}) => {
    const auth=useAuth();
  const authuser=auth.user;
  if(!authuser){
    return <Navigate to="/"/>
  }
  return children

  
}

export default ProtectdRoute;