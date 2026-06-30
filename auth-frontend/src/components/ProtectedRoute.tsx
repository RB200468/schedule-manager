import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const user = 1; // however you track auth state

  
  return user ? <Outlet/> : <Navigate to="/login" replace/>;
};

export default ProtectedRoute;