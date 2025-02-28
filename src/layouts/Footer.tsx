import logodanlentara from '../assets/logo dan lentara.png';
import instagramLogo from '../assets/instagram.png';
import tiktokLogo from '../assets/tiktok.png';
import linkedinLogo from '../assets/linkedin.png';

const Footer = () => {
  return (
    <footer className="bg-tertiary-400 text-base h-full">
      <div className="h-11 bg-tertiary-300"></div>

      <div className="container mx-auto py-16 px-6 flex flex-col md:flex-row justify-center gap-10 md:gap-12 lg:gap-32 text-center md:text-left">
        <div className="flex flex-col items-center w-full md:w-auto">
          <div className="flex items-center w-40 lg:w-48 h-auto mx-4 md:mx-0">
            <img src={logodanlentara} alt="lentara" className="h-12 md:h-16 w-auto object-contain" />
          </div>
          <p className="text-white">Illuminating your life</p>
        </div>

        <div className="w-full md:w-auto">
          <h3 className="font-bold mb-2 text-white">(Nama platform)</h3>
          <ul className="space-y-2 text-white">
            <li className="cursor-pointer hover:text-black">Tentang Kami</li>
            <li className="cursor-pointer hover:text-black">Blog</li>
            <li className="cursor-pointer hover:text-black">Promo</li>
            <li className="cursor-pointer hover:text-black">Metode Pembayaran</li>
            <li className="cursor-pointer hover:text-black">Lacak Pesanan</li>
            <li className="cursor-pointer hover:text-black">Pengembalian Barang</li>
            <li className="cursor-pointer hover:text-black">Garansi</li>
            <li className="cursor-pointer hover:text-black">Mulai Jual</li>
          </ul>
        </div>

        <div className="w-full md:w-auto">
          <h3 className="font-bold mb-2 text-white">Layanan</h3>
          <ul className="space-y-2 text-white">
            <li className="cursor-pointer hover:text-black">Pusat Bantuan</li>
            <li className="cursor-pointer hover:text-black">Kontak Media</li>
            <li className="cursor-pointer hover:text-black">Kebijakan dan Privasi</li>
            <li className="cursor-pointer hover:text-black">FAQs</li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start w-full md:w-auto">
          <h3 className="font-bold mb-4 text-white">Ikuti Kami</h3>
          <div className="flex space-x-4">
            <img src={instagramLogo} className="w-10 h-10 md:w-12 md:h-12 hover:bg-gray-600 cursor-pointer rounded-full"></img>
            <img src={tiktokLogo} className="w-10 h-10 md:w-12 md:h-12 hover:bg-gray-600 cursor-pointer rounded-full"></img>
            <img src={linkedinLogo} className="w-10 h-10 md:w-12 md:h-12 hover:bg-gray-600 cursor-pointer rounded-full"></img>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
