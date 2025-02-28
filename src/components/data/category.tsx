import { ProductCategory } from '../../types/category.tsx';
import { Category } from '../../types/category.tsx';
import { FaComputer } from 'react-icons/fa6';
import { GiFamilyHouse } from 'react-icons/gi';
import { PiBeachBallFill } from 'react-icons/pi';
import { LuCalendarClock } from 'react-icons/lu';
import { SlPlane } from 'react-icons/sl';

export const categories: Category[] = [
  {
    id: 1,
    name: ProductCategory.ELECTRONICS,
    icon: <FaComputer />,
  },
  {
    id: 2,
    name: ProductCategory.TOOLS,
    icon: <GiFamilyHouse />,
  },
  {
    id: 3,
    name: ProductCategory.HOBBY,
    icon: <PiBeachBallFill />,
  },
  {
    id: 4,
    name: ProductCategory.EVENT,
    icon: <LuCalendarClock />,
  },
  {
    id: 5,
    name: ProductCategory.HOLIDAY,
    icon: <SlPlane />,
  },
];
