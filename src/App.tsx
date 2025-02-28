import { AuthProvider } from './contexts/AuthProvider';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
