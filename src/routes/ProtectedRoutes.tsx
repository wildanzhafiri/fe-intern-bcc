import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useEffect, useState } from 'react';

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { user, userToken, isInitialized } = useAuth();
  const [localUserToken, setLocalUserToken] = useState<string | null>(null);

  useEffect(() => {
    setLocalUserToken(localStorage.getItem('userToken'));
  }, []);

  if (!isInitialized) {
    return <p className="text-center">Loading...</p>;
  }
  if (!user && !userToken && !localUserToken) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoutes;
