import { Navigate, Outlet } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';

function PrivateRoute() {
  //   const isLoggedIn = useAuth();
  const isLoggedIn = true;

  if (!isLoggedIn) {
    alert('로그인이 필요한 서비스입니다.');
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default PrivateRoute;
