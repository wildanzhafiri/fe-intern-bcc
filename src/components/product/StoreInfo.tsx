import { Icon } from '@iconify/react';
import { GoStarFill } from 'react-icons/go';
import { CiHeart } from 'react-icons/ci';
import Button from '../ui/Button';
import avatarToko from '../../assets/avatarToko.png';
import { Owner } from '../../types/owner';

interface StoreInfoProps {
  seller: Owner;
}

const StoreInfo: React.FC<StoreInfoProps> = ({ seller }) => {
  return (
    <div className="border-t border-b py-6 my-6 flex flex-col md:flex-row items-center gap-10">
      <div className="flex items-center gap-4">
        <img src={avatarToko} className="w-16 h-16 rounded-full"></img>
        <div>
          <h3 className="text-lg font-semibold">{seller?.store_name}</h3>
          <p className="text-gray-600 flex items-center">
            <GoStarFill className="mr-1 text-primary-400" />
            4.9/5 (10 penyewa)
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button icon={<Icon icon="tabler:message" className=" w-4 h-4 md:w-6 md:h-6" />} variant={'transparent2'} text={'Chat'} />
        <Button icon={<Icon icon="tdesign:shop-4" className=" w-4 h-4 md:w-6 md:h-6" />} variant={'transparent2'} text={'Toko'} />
        <Button icon={<Icon icon="material-symbols:report-outline-rounded" className=" w-4 h-4 md:w-6 md:h-6" />} variant={'transparent2'} text={'Laporkan'} />
        <Button icon={<CiHeart className="w-8 h-8" />} variant={'none'} />
      </div>
    </div>
  );
};

export default StoreInfo;
