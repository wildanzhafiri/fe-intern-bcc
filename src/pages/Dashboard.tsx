import DashboardCard from '../components/dashboard/DashboardCard';
import Button from '../components/ui/Button';
import { CiSearch } from 'react-icons/ci';
import { useAuth } from '../hooks/useAuth';
import useLoading from '../hooks/useLoading';
import { useState } from 'react';

const Dashboard = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [profileOpen, setProfileOpen] = useState(false);
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

  const stats = [
    { title: 'Ajuan Sewa', value: 12 },
    { title: 'Lunas', value: 20 },
    { title: 'Proses Pengiriman', value: 8 },
    { title: 'Pengembalian Barang Sewa', value: 6 },
    { title: 'Batal Sewa', value: 2 },
    { title: 'Ulasan Baru', value: 30 },
  ];

  return (
    <div className="p-4 mt-14 md:mt-0 md:px-10 md:py-5">
      <div className="flex md:flex-row gap-4 justify-between items-center relative">
        <div className="relative w-full md:max-w-6xl">
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900 text-lg" />
          <input type="text" placeholder="Cari di Lentara" className="w-full pl-10 pr-4 py-2 md:py-3 border border-secondary-600 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-1 focus:ring-black" />
        </div>

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

      <div className="mt-10 bg-white p-6 md:p-8 rounded-[40px] border border-secondary-600 flex flex-col md:flex-row items-start md:items-center gap-4">
        <p className="text-black">Anda dapat menambahkan produk yang dijual di Lentara. Produk dapat berupa alat elektronik, perkakas, peralatan hobi, keperluan acara, dan perlengkapan liburan.</p>
        <Button text="Tambah Produk" variant="addProduct" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {stats.map((stat, index) => (
          <DashboardCard key={index} title={stat.title} value={stat.value} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
