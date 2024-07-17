import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoute = (): JSX.Element => {
  const isAuthenticated = false; 

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};
