import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import { TbMessage } from 'react-icons/tb';
import { GoBell } from 'react-icons/go';
import { useAuth } from '../hooks/useAuth';
import useLoading from '../hooks/useLoading';
import Button from '../components/ui/Button';
import logodanlentara from '../assets/logo dan lentara.png';
import logo from '../assets/logo lentara.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { loading, startLoading, stopLoading } = useLoading();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      navigate(`/category?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleLogout = async () => {
    startLoading();
    try {
      await logout();
      window.location.reload();
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      stopLoading();
    }
  };

  return (
    <nav className="bg-primary-500 px-4 md:px-10 fixed w-full top-0 z-50">
      <div className="hidden md:flex justify-between pt-2 text-sm text-white">
        <div className="flex space-x-14 text-base px-5">
          <Link to="/" className="hover:text-primary-700">
            Bantuan
          </Link>
          <Link to="/" className="hover:text-primary-700">
            Promo
          </Link>
          <Link to="/ownerLogin" className="hover:text-primary-700">
            Mulai Beri Sewa
          </Link>
        </div>
      </div>

      <div className="flex items-center h-16 md:h-20">
        <button className="md:hidden text-white text-3xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>

        <Link to="/" className="md:hidden flex items-center ml-4">
          <img src={logo} alt="Logo" className="h-10 w-10" />
        </Link>

        <div className="hidden md:flex items-center w-40 lg:w-48 h-auto mx-4 md:mx-0">
          <img src={logodanlentara} onClick={() => navigate('/')} alt="lentara" className="h-12 md:h-16 w-auto object-contain cursor-pointer" />
        </div>

        <div className="flex flex-1 mx-4 md:mx-8">
          <div className="relative w-full">
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900 text-lg" />
            <input
              type="text"
              placeholder="Cari di Lentara"
              className="w-full pl-10 pr-4 py-2 md:py-3 border rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-1 focus:ring-black"
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
        </div>

        <div className="flex items-center space-x-2 md:space-x-8">
          <MdOutlineShoppingCart className="text-white w-6 h-6 md:w-7 md:h-7 hover:text-primary-700 cursor-pointer" onClick={() => navigate(user ? '/cartpage' : '/login')} />

          {user ? (
            <div className="flex items-center space-x-2 md:space-x-8">
              <TbMessage className="text-white w-6 h-6 md:w-7 md:h-7 hover:text-primary-700 cursor-pointer" />
              <GoBell className="text-white w-6 h-6 md:w-7 md:h-7 hover:text-primary-700 cursor-pointer" />

              <div className="relative">
                <img src={user.profile_picture} className="hidden md:block w-8 h-8 md:w-12 md:h-12 rounded-full cursor-pointer" alt="User Avatar" onClick={() => setProfileOpen(!profileOpen)} />
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg py-2">
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" onClick={handleLogout} disabled={loading}>
                      {loading ? 'Logging out...' : 'Logout'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <Button onClick={() => navigate('/login')} variant="transparent" text="Masuk" />
              <Button onClick={() => navigate('/register')} variant="daftar" text="Daftar" />
            </div>
          )}
        </div>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        <div className="py-4 px-6 flex flex-col space-y-4">
          <Link to="/" className="hover:text-primary-700">
            Bantuan
          </Link>
          <Link to="/" className="hover:text-primary-700">
            Promo
          </Link>
          <Link to="/ownerLogin" className="hover:text-primary-700">
            Mulai Beri Sewa
          </Link>

          {user ? (
            <div className="flex flex-col items-center pt-4">
              <img src={user.profile_picture} className="w-12 h-12 rounded-full cursor-pointer" alt="User Avatar" />
              <p className="text-gray-700 mt-2">{user.username}</p>

              <button className="mt-3 px-4 py-2 bg-red-500 text-white rounded-md w-full text-center" onClick={handleLogout} disabled={loading}>
                {loading ? 'Logging out...' : 'Logout'}
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center my-2 gap-3">
              <Button onClick={() => navigate('/login')} variant="primary" text="Masuk" full />
              <Button onClick={() => navigate('/register')} variant="daftar" text="Daftar" full />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
