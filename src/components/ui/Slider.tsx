import { useState, useEffect } from 'react';

import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';

const images = [
  [banner1, banner2],
  [banner1, banner2],
  [banner1, banner2],
  [banner1, banner2],
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-10 w-full rounded-xl overflow-hidden">
      <div className="relative mb-10 w-full ">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((pair, index) => (
            <div
              key={index}
              className="flex w-full flex-shrink-0 gap-2 md:gap-6 
                        flex-col md:flex-row"
            >
              <div className="w-full h-[200px] md:h-[300px] lg:h-[400px]">
                <img src={pair[0]} alt={`Slide ${index + 1} - Image 1`} className="w-full h-full rounded-xl object-contain" />
              </div>

              <div className="w-full h-[200px] md:h-[300px] lg:h-[400px]">
                <img src={pair[1]} alt={`Slide ${index + 1} - Image 2`} className="w-full h-full rounded-xl object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-2">
        {images.map((_, index) => (
          <span key={index} className={`h-3 rounded-full transition-all duration-500 ${index === currentIndex ? 'w-10 bg-primary-400' : 'w-3 bg-gray-400'}`} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
