import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo dan lentara.png';

const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <>
      <button className="md:hidden fixed top-4 left-4 z-50 bg-[#00378B] text-white p-2 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
        <Icon icon="ic:round-menu" className="text-2xl" />
      </button>

      <aside
        className={`bg-[#80AEF3] text-[#1D2B53] z-50 flex flex-col w-64 md:w-72 lg:w-96 transition-transform duration-300 
        fixed md:relative min-h-screen md:min-h-full
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div className="p-5 text-2xl font-bold flex items-center space-x-2 mb-2">
          <div className="rounded-full flex items-center justify-center px-5">
            <img src={Logo} alt="Logo" />
          </div>
        </div>

        <nav className="px-5 flex flex-col flex-1 justify-between">
          <ul>
            <li className="mb-1">
              <Link
                to="/dashboard"
                onClick={() => setActive('/dashboard')}
                className={`flex items-center space-x-3 py-2 px-4 rounded-lg ${active === '/dashboard' ? 'font-medium text-white bg-[#00378B]' : 'text-[#1D2B53] hover:bg-[#6B9BE8] hover:text-white'}`}
              >
                <span className="text-lg">
                  <Icon icon="material-symbols:dashboard-2-outline" />
                </span>
                <span>Dashboard</span>
              </Link>

              {active === '/dashboard' && <div className="absolute right-0 w-[6px] h-10 bg-[#00378B] top-[104px] md:top-[90px] lg:top-[120px]" />}
            </li>

            <li className="mb-1">
              <Link
                to="/chat"
                onClick={() => setActive('/chat')}
                className={`flex items-center space-x-3 py-2 px-4 rounded-lg ${active === '/chat' ? 'font-medium text-white bg-[#00378B]' : 'text-[#1D2B53] hover:bg-[#6B9BE8] hover:text-white'}`}
              >
                <span className="text-lg">
                  <Icon icon="tabler:message" />
                </span>
                <span>Chat</span>
              </Link>

              {active === '/chat' && <div className="absolute right-0 w-[6px] h-10 bg-[#00378B] top-[140px]" />}
            </li>

            <li className="mb-1">
              <Link
                to="/dashboard/toko"
                onClick={() => setActive('/dashboard/toko')}
                className={`flex items-center space-x-3 py-2 px-4 rounded-lg ${active === '/dashboard/toko' ? 'font-medium text-white bg-[#00378B]' : 'text-[#1D2B53] hover:bg-[#6B9BE8] hover:text-white'}`}
              >
                <span className="text-lg">
                  <Icon icon="tdesign:shop-4" />
                </span>
                <span>Toko</span>
              </Link>

              {active === '/dashboard/toko' && <div className="absolute right-0 w-[6px] h-10 bg-[#00378B] top-[192px] md:top-[178px] lg:top-[208px]" />}
            </li>

            <li className="mb-1">
              <Link
                to="/statistik"
                onClick={() => setActive('/statistik')}
                className={`flex items-center space-x-3 py-2 px-4 rounded-lg ${active === '/statistik' ? 'font-medium text-white bg-[#00378B]' : 'text-[#1D2B53] hover:bg-[#6B9BE8] hover:text-white'}`}
              >
                <span className="text-lg">
                  <Icon icon="uil:statistics" />
                </span>
                <span>Statistik</span>
              </Link>

              {active === '/statistik' && <div className="absolute right-0 w-[6px] h-10 bg-[#00378B] top-[240px]" />}
            </li>

            <li className="mb-1">
              <Link
                to="/ulasan"
                onClick={() => setActive('/ulasan')}
                className={`flex items-center space-x-3 py-2 px-4 rounded-lg ${active === '/ulasan' ? 'font-medium text-white bg-[#00378B]' : 'text-[#1D2B53] hover:bg-[#6B9BE8] hover:text-white'}`}
              >
                <span className="text-lg">
                  <Icon icon="mdi:star-outline" />
                </span>
                <span>Ulasan</span>
              </Link>

              {active === '/ulasan' && <div className="absolute right-0 w-[6px] h-10 bg-[#00378B] top-[290px]" />}
            </li>
            <li className="mb-1">
              <Link
                to="/promosi"
                onClick={() => setActive('/promosi')}
                className={`flex items-center space-x-3 py-2 px-4 rounded-lg ${active === '/ulasan' ? 'font-medium text-white bg-[#00378B]' : 'text-[#1D2B53] hover:bg-[#6B9BE8] hover:text-white'}`}
              >
                <span className="text-lg">
                  <Icon icon="tabler:speakerphone" />
                </span>
                <span>Promosi</span>
              </Link>

              {active === '/promosi' && <div className="absolute right-0 w-[6px] h-10 bg-[#00378B] top-[290px]" />}
            </li>
            <li className="mb-1">
              <Link
                to="/pusatbantuan"
                onClick={() => setActive('/pusatbantuan')}
                className={`flex items-center space-x-3 py-2 px-4 rounded-lg ${active === '/ulasan' ? 'font-medium text-white bg-[#00378B]' : 'text-[#1D2B53] hover:bg-[#6B9BE8] hover:text-white'}`}
              >
                <span className="text-lg">
                  <Icon icon="iconoir:headset-help" />
                </span>
                <span>Pusat Bantuan</span>
              </Link>

              {active === '/pusastbantuan' && <div className="absolute right-0 w-[6px] h-10 bg-[#00378B] top-[290px]" />}
            </li>
          </ul>

          <ul className="mt-auto mb-5">
            <li>
              <Link
                to="/pengaturan"
                onClick={() => setActive('/pengaturan')}
                className={`flex items-center space-x-3 py-2 px-4 rounded-lg ${active === '/pengaturan' ? 'font-medium text-white bg-[#00378B]' : 'text-[#1D2B53] hover:bg-[#6B9BE8] hover:text-white'}`}
              >
                <span className="text-lg">
                  <Icon icon="ant-design:setting-outlined" />
                </span>
                <span>Pengaturan</span>
              </Link>

              {active === '/pengaturan' && <div className="absolute right-0 w-[6px] h-10 bg-[#00378B] bottom-5" />}
            </li>
          </ul>
        </nav>
      </aside>

      {isOpen && <div className="fixed inset-0 bg-transparent bg-opacity-20 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Sidebar;
