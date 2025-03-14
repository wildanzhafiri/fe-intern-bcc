import Sidebar from '../components/dashboard/Sidebar';

import FooterDashboard from './FooterDashboard';

const LayoutDasboard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-grow">
        <Sidebar />
        <main className="w-full pb-20">{children}</main>
      </div>
      <FooterDashboard />
    </div>
  );
};

export default LayoutDasboard;
