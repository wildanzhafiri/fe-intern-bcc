import { SlArrowRight } from 'react-icons/sl';

interface DashboardCardProps {
  title: string;
  value: number;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white border border-secondary-500 rounded-xl px-6 py-8 flex flex-col justify-between h-full">
      <div className="flex items-center space-x-2">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <SlArrowRight className="w-3 h-3 text-gray-500" />
      </div>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
};

export default DashboardCard;
