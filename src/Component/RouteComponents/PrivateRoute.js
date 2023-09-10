import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = true;
 
  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element /> : <Navigate to="/login" replace />}
    />
  );
};

// Replace /* Check if user is authenticated */ with your authentication logic
// isAuthenticated should return true if the user is logged in, otherwise false

export default PrivateRoute;
