import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useLoading from '../../hooks/useLoading';
import { BiSolidLockAlt } from 'react-icons/bi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const { loading, startLoading, stopLoading } = useLoading();

  const handleLogin = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Username dan password harus diisi!');
      return;
    }

    startLoading();

    await new Promise<void>((resolve) => setTimeout(resolve, 3000));

    const success: boolean = login(username, password);

    if (success) {
      navigate('/');
    } else {
      setError('Username atau password salah.');
      stopLoading();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[350px] rounded-lg">
        <div className="h-[50px] bg-primary-400 rounded-t-lg border"></div>

        <div className="bg-gray-300 px-6 py-8 rounded-b-lg border">
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-black text-sm font-medium">Username</label>
              <input type="text" className="w-full p-2 bg-white rounded-xl mt-1 focus:outline-none" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>

            <div className="mb-2">
              <label className="block text-black text-sm font-medium">Password</label>
              <div className="w-full relative">
                <BiSolidLockAlt className="absolute right-3 top-6 transform -translate-y-2 text-gray-900 text-lg" />
                <input type="password" className="w-full p-2 bg-white rounded-xl mt-1 focus:outline-none" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
            </div>

            <div className={`${error ? 'mb-0' : 'mb-4'}`}>
              <a href="#" className="text-tertiary-500 underline">
                Lupa password?
              </a>
            </div>

            {error && <p className="text-red-600 my-2">{error}</p>}

            <button
              type="submit"
              className={`w-full h-10 bg-tertiary-400 text-white p-2 rounded-xl hover:bg-tertiary-200 font-medium flex items-center justify-center gap-2 transition-all ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <AiOutlineLoading3Quarters className="animate-spin text-xl" />
                  <span>Memuat...</span>
                </>
              ) : (
                'Masuk'
              )}
            </button>
          </form>

          <p className="mt-2 text-sm text-black">
            Belum punya akun?{' '}
            <a href="/register" className="text-tertiary-500 underline">
              Daftar Sekarang.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
