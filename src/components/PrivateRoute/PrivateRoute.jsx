import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const { user } = useAuth();
  let location = useLocation();
  if(user.email){

    return children;
  }
  return <Navigate to="/login" state = {{from: location}}/>;
};

export default PrivateRoute;