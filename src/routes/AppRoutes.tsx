import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Homepage from '../pages/Homepage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Homepage />
          </MainLayout>
        }
      ></Route>
    </Routes>
  );
};

export default AppRoutes;
