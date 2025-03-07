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
    value: 'electronics',
  },
  {
    id: 2,
    name: ProductCategory.TOOLS,
    icon: <GiFamilyHouse />,
    value: 'tools',
  },
  {
    id: 3,
    name: ProductCategory.HOBBY,
    icon: <PiBeachBallFill />,
    value: 'hobby',
  },
  {
    id: 4,
    name: ProductCategory.EVENT,
    icon: <LuCalendarClock />,
    value: 'events',
  },
  {
    id: 5,
    name: ProductCategory.HOLIDAY,
    icon: <SlPlane />,
    value: 'holiday',
  },
];
