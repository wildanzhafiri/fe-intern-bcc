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

const queryClient = new QueryClient();
const AppRoutes = () => {
  const location = useLocation();
  const { loading, startLoading, stopLoading } = useLoading();

  useEffect(() => {
    startLoading();
    const timer = setTimeout(() => stopLoading(), 700);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Loading loading={loading} />
      <Routes>
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
          path="/Cartpage"
          element={
            <ProtectedRoutes>
              <MainLayout>
                <CartPage />
              </MainLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoutes>
              <MainLayout>
                <Payment />
              </MainLayout>
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
