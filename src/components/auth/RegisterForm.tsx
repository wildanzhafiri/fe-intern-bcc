import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useLoading from '../../hooks/useLoading';
import { BiSolidLockAlt } from 'react-icons/bi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import logo from '../../assets/logo-dan-lentara-2.png';
import image from '../../assets/ilustrasi-register.png';

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

    if (username.length < 3) {
      setError('Username harus minimal 3 karakter.');
      return;
    }

    if (password.length < 8) {
      setError('Password harus minimal 8 karakter.');
      return;
    }

    startLoading();

    const success = await register(username, password, email);

    if (success) {
      setError('');
      setSuccess('Registrasi berhasil! Silakan login.');
      setTimeout(() => navigate('/login'), 3000);
    } else {
      setError('Username atau email sudah digunakan');
      stopLoading();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-4">
      <div className="w-full max-w-[800px] bg-white rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-[450px] flex flex-col justify-center items-center border border-[#191970] rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
          <img src={logo} alt="Lentara" className="w-24 md:w-32 my-6 md:mb-14" />
          <img src={image} alt="Ilustrasi" className="w-[80%] md:w-full mb-4" />
        </div>

        <div className="w-full md:w-[350px] border border-[#191970] rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
          <div className="bg-[#191970] py-3 flex items-center justify-center">
            <h2 className="text-xl md:text-2xl font-semibold text-white">Daftar</h2>
          </div>
          <div className="p-6 md:p-8">
            <form onSubmit={handleRegister} className="px-1 mt-2">
              <div className="mb-4">
                <label className="block text-black text-sm font-medium">Email</label>
                <input type="email" className="w-full p-2 rounded-lg border mt-1 focus:outline-none" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>

              <div className="mb-4">
                <label className="block text-black text-sm font-medium">Username</label>
                <input type="text" className="w-full p-2 rounded-lg border mt-1 focus:outline-none" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </div>

              <div className="mb-4">
                <label className="block text-black text-sm font-medium">Password</label>
                <div className="relative">
                  <BiSolidLockAlt className="absolute right-3 top-4 text-black text-lg" />
                  <input type="password" className="w-full p-2 rounded-lg border mt-1 focus:outline-none pr-10" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-black text-sm font-medium">Ulangi Password</label>
                <div className="relative">
                  <BiSolidLockAlt className="absolute right-3 top-4 text-black text-lg" />
                  <input type="password" className="w-full p-2 rounded-lg border mt-1 focus:outline-none pr-10" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>
              </div>

              {error && <p className="text-red-600 my-2">{error}</p>}
              {success && <p className="text-green-700 my-2">{success}</p>}

              <button
                type="submit"
                className={`w-full h-10 bg-primary-400 text-white p-2 rounded-xl font-medium flex items-center justify-center gap-2 transition-all md:mt-24 md:mb-4 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-600'}`}
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
    </div>
  );
};

export default RegisterForm;
