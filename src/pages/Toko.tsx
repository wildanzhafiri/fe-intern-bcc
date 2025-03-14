import { useState } from 'react';
import ProductForm from '../components/dashboard/ProductForm';
import { useAuth } from '../hooks/useAuth';
import useLoading from '../hooks/useLoading';

const Toko = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const { loading, startLoading, stopLoading } = useLoading();
  const { owner, logout } = useAuth();

  const handleLogout = async () => {
    startLoading();
    try {
      logout();
      window.location.reload();
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      stopLoading();
    }
  };
  return (
    <div className="p-6">
      <div className="flex items-center justify-between w-full mt-10 px-4 md:mt-0 md:px-7">
        <h2 className="text-2xl font-semibold">Informasi Produk</h2>

        <div className="relative flex-shrink-0">
          <img src={owner?.profile_picture} alt="photo profil" className="w-14 h-14 md:w-20 md:h-20 rounded-full cursor-pointer object-cover" onClick={() => setProfileOpen(!profileOpen)} />

          {profileOpen && (
            <div className="absolute right-0 top-12 w-40 bg-white shadow-md rounded-lg py-2 z-10">
              <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" onClick={handleLogout} disabled={loading}>
                {loading ? 'Logging out...' : 'Logout'}
              </button>
            </div>
          )}
        </div>
      </div>

      <main>
        <ProductForm />
      </main>
    </div>
  );
};

export default Toko;
