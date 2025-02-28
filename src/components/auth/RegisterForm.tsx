import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useLoading from '../../hooks/useLoading';
import { BiSolidLockAlt } from 'react-icons/bi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const { loading, startLoading, stopLoading } = useLoading();
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    if (!username || !password || !confirmPassword || !email) {
      setError('Semua data harus diisi.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Password tidak cocok.');
      return;
    }

    startLoading();

    await new Promise<void>((resolve) => setTimeout(resolve, 3000));

    const success: boolean = register(username, password, email);

    if (success) {
      setError('');
      setSuccess('Registrasi berhasil! Silakan login.');
      setTimeout(() => navigate('/login'), 3000);
    } else {
      setError('Username atau email sudah digunakan.');
      stopLoading();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[350px] rounded-lg">
        <div className="h-[50px] bg-primary-400 rounded-t-lg border"></div>

        <div className="bg-gray-300 px-6 py-8 rounded-b-lg border">
          <form onSubmit={handleRegister}>
            <div className="mb-6">
              <label className="block text-black text-sm font-medium">Username</label>
              <input type="text" className="w-full p-2 rounded-xl border bg-white mt-1 focus:outline-none" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>

            <div className="mb-6">
              <label className="block text-black text-sm font-medium">Password</label>
              <div className="relative w-full">
                <BiSolidLockAlt className="absolute right-3 top-6 transform -translate-y-2 text-gray-900 text-lg" />
                <input type="password" className="w-full p-2 rounded-xl border bg-white mt-1 focus:outline-none" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-black text-sm font-medium">Ulangi Password</label>
              <div className="w-full relative">
                <BiSolidLockAlt className="absolute right-3 top-6 transform -translate-y-2 text-gray-900 text-lg" />
                <input type="password" className="w-full p-2 rounded-xl border bg-white mt-1 focus:outline-none" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              </div>
            </div>

            <div className={`${error ? 'mb-0' : 'mb-8'}`}>
              <label className="block text-black text-sm font-medium">Email</label>
              <input type="email" className="w-full p-2 rounded-xl border bg-white mt-1 focus:outline-none" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            {error && <p className="text-red-600 my-2">{error}</p>}
            {success && <p className="text-green-600 my-2">{success}</p>}

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
                'Daftar'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
