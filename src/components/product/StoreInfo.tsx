import { LuStore } from 'react-icons/lu';
import { TbMessage } from 'react-icons/tb';
import { MdOutlineReport } from 'react-icons/md';
import { GoStarFill } from 'react-icons/go';
import { CiHeart } from 'react-icons/ci';
import Button from '../ui/Button';
import avatarToko from '../../assets/avatarToko.png';

const StoreInfo: React.FC = () => {
  return (
    <div className="border-t border-b py-6 my-6 flex flex-col md:flex-row items-center gap-10">
      <div className="flex items-center gap-4">
        <img src={avatarToko} className="w-16 h-16 rounded-full"></img>
        <div>
          <h3 className="text-lg font-semibold">Nama Toko</h3>
          <p className="text-gray-600 flex items-center">
            <GoStarFill className=" mr-1" /> 4.9/5 (10 penyewa)
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button icon={<TbMessage />} variant={'transparent'} text={'Chat'} />
        <Button icon={<LuStore />} variant={'transparent'} text={'Toko'} />
        <Button icon={<MdOutlineReport className="w-5 h-7" />} variant={'transparent'} text={'Laporkan'} />
        <Button icon={<CiHeart className="w-7 h-7" />} variant={'none'} />
      </div>
    </div>
  );
};

export default StoreInfo;
