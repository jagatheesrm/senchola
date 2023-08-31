import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './auth';

const ProtectdRoute = ({children}) => {
    const auth=useAuth();
  const authuser=auth.user;
  if(!authuser){
    return <Navigate to="/unauth"/>
  }
  return children

  
}

export default ProtectdRoute;