import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import Homepage from '../pages/Homepage';
import ProductDetail from '../pages/ProductDetail';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Category from '../pages/Category';
import Loading from '../components/Loading';
import useLoading from '../hooks/useLoading';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProtectedRoutes from './ProtectedRoutes';
import CartPage from '../pages/Cartpage';
import Payment from '../pages/Payment';
import Dashboard from '../pages/Dashboard';
import Toko from '../pages/Toko';
import LayoutDasboard from '../layouts/LayoutDasboard';
import OwnerRegister from '../pages/OwnerRegister';
import OwnerLogin from '../pages/OwnerLogin';
import Favorite from '../pages/Favorite';
import ProtectedDashboardRoutes from './ProtectedDashboardRoutes';

const queryClient = new QueryClient();
const AppRoutes = () => {
  const location = useLocation();
  const { loading, startLoading, stopLoading } = useLoading();

  useEffect(() => {
    if (!location.pathname.startsWith('/dashboard')) {
      startLoading();
      const timer = setTimeout(() => stopLoading(), 700);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      <Loading loading={loading} />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedDashboardRoutes>
              <LayoutDasboard>
                <Dashboard />
              </LayoutDasboard>
            </ProtectedDashboardRoutes>
          }
        />
        <Route
          path="/dashboard/toko"
          element={
            <ProtectedDashboardRoutes>
              <LayoutDasboard>
                <Toko />
              </LayoutDasboard>
            </ProtectedDashboardRoutes>
          }
        />
        <Route
          path="/"
          element={
            <MainLayout>
              <Homepage />
            </MainLayout>
          }
        />
        <Route
          path="/productDetail/:id"
          element={
            <QueryClientProvider client={queryClient}>
              <MainLayout>
                <ProductDetail />
              </MainLayout>
            </QueryClientProvider>
          }
        />
        <Route
          path="/category"
          element={
            <MainLayout>
              <Category />
            </MainLayout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/cartpage"
          element={
            <ProtectedRoutes>
              <MainLayout>
                <CartPage />
              </MainLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/favorite"
          element={
            <ProtectedRoutes>
              <MainLayout>
                <Favorite />
              </MainLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/payment"
          element={
            <MainLayout>
              <Payment />
            </MainLayout>
          }
        />
        <Route path="/ownerRegister" element={<OwnerRegister />} />
        <Route path="/ownerLogin" element={<OwnerLogin />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
