import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useEffect, useState } from 'react';

const ProtectedDashboardRoutes = ({ children }: { children: React.ReactNode }) => {
  const { owner, ownerToken, isInitialized } = useAuth();
  const [localUserToken, setLocalUserToken] = useState<string | null>(null);

  useEffect(() => {
    setLocalUserToken(localStorage.getItem('ownerToken'));
  }, []);

  if (!isInitialized) {
    return <p className="text-center">Loading...</p>;
  }
  if (!owner && !ownerToken && !localUserToken) {
    return <Navigate to="/ownerLogin" />;
  }

  return children;
};

export default ProtectedDashboardRoutes;
