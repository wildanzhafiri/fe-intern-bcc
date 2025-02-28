import { useState } from 'react';
import Button from './Button';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';

const images = [
  'https://www.incharge.org/wp-content/uploads/2019/08/lower-rent.jpg',
  'https://files.theinteriorsaddict.com/uploads/2014/07/Royal-wolf-container-room-studio.jpg',
  'https://i.pinimg.com/736x/ae/c2/0d/aec20d200a5a4e907ba9553f0e7aef53.jpg',
  'https://i.pinimg.com/736x/f1/6f/2a/f16f2a11fd92685f77eaa1ed86d9626b.jpg',
];

const Carousel: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);

  const previousSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="w-full h-full pt-4">
      <div className="overflow-hidden relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-xl">
        <div className="flex transition-transform ease-out duration-500 h-full w-full" style={{ transform: `translateX(-${current * 100}%)` }}>
          {images.map((img, index) => (
            <img key={index} src={img} alt="slider-image" className="min-w-full h-full object-cover" />
          ))}
        </div>

        <div className="absolute top-0 h-full w-full flex justify-between items-center px-4 sm:px-6">
          <Button variant="arrowButton" icon={<SlArrowLeft />} onClick={previousSlide} />
          <Button variant="arrowButton" icon={<SlArrowRight />} onClick={nextSlide} />
        </div>
      </div>

      <div className="w-full flex justify-center gap-3 my-4">
        {images.map((_, index) => (
          <span key={index} className={`h-3 rounded-full transition-all duration-500 ${index === current ? 'w-10 bg-gray-700' : 'w-3 bg-gray-400'}`} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
