import { Outlet, Navigate } from 'react-router';
import Cookies from 'js-cookie';

const RouteGuard = () => {
  const auth = Cookies.get('token');
  return auth ? <Outlet /> : <Navigate to='auth/login' />;
};

export default RouteGuard;