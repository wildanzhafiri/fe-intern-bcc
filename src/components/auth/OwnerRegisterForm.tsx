import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useLoading from '../../hooks/useLoading';
import { BiSolidLockAlt } from 'react-icons/bi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import logo from '../../assets/logo-dan-lentara-2.png';
import image from '../../assets/ilustrasi-register.png';

const OwnerRegisterForm = () => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [storeName, setStoreName] = useState('');
  const [storeAddress, setStoreAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const { loading, startLoading, stopLoading } = useLoading();
  const { registerOwner } = useAuth();
  const navigate = useNavigate();

  const handleNextStep = (event: React.FormEvent) => {
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

    setError('');
    setStep(2);
  };

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!storeName || !storeAddress || !phoneNumber) {
      setError('Semua data toko harus diisi.');
      return;
    }

    startLoading();
    const success = await registerOwner(username, password, email, storeName, storeAddress, phoneNumber);

    if (success) {
      setSuccess('Registrasi berhasil! Silakan login.');
      setTimeout(() => navigate('/ownerLogin'), 3000);
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
            <h2 className="text-xl md:text-2xl font-semibold text-white">{step === 1 ? 'Daftar' : 'Informasi Toko'}</h2>
          </div>

          <div className={`p-6 md:p-8 transition-opacity duration-500 ease-in-out ${step === 2 ? 'animate-fadeIn' : 'animate-fadeOut'}`}>
            {step === 1 ? (
              <form onSubmit={handleNextStep} className="px-1 mt-2">
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

                <button type="submit" className="w-full h-10 bg-primary-400 text-white p-2 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-primary-600 transition-all md:mt-24 md:mb-4 ">
                  Lanjut
                </button>
                <p className="mt-4 text-sm text-black text-center">
                  Sudah punya akun?{' '}
                  <a href="/ownerLogin" className="text-primary-500 underline">
                    Masuk.
                  </a>
                </p>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="px-1 mt-2">
                <div className="mb-4">
                  <label className="block text-black text-sm font-medium">Nama Toko</label>
                  <input type="text" className="w-full p-2 rounded-lg border mt-1 focus:outline-none" value={storeName} onChange={(e) => setStoreName(e.target.value)} required />
                </div>

                <div className="mb-4">
                  <label className="block text-black text-sm font-medium">Alamat Lengkap Toko</label>
                  <input type="text" className="w-full p-2 rounded-lg border mt-1 focus:outline-none" value={storeAddress} onChange={(e) => setStoreAddress(e.target.value)} required />
                </div>

                <div className="mb-4">
                  <label className="block text-black text-sm font-medium">Nomor Telepon</label>
                  <input type="text" className="w-full p-2 rounded-lg border mt-1 focus:outline-none" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                </div>

                {error && <p className="text-red-600 my-2">{error}</p>}
                {success && <p className="text-green-700 my-2">{success}</p>}

                <button type="submit" className="w-full h-10 bg-primary-400 text-white p-2 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-primary-600 transition-all" disabled={loading}>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerRegisterForm;
