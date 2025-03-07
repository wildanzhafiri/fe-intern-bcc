import { useState } from 'react';
import Button from './Button';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import { useParams } from 'react-router-dom';
import { useProductMedia } from '../../hooks/useProduct';

const Carousel: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: images = [], isLoading } = useProductMedia(id);

  const [current, setCurrent] = useState<number>(0);

  const previousSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading images...</p>;
  }

  return (
    <div className="w-full h-full pt-4">
      <div className="overflow-hidden relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-xl">
        {images.length > 0 ? (
          <>
            <div className="flex transition-transform ease-out duration-500 h-full w-full" style={{ transform: `translateX(-${current * 100}%)` }}>
              {images.map((img, index) => (
                <img key={index} src={img} alt="slider-image" className="min-w-full h-full object-cover" />
              ))}
            </div>

            <div className="absolute top-0 h-full w-full flex justify-between items-center px-4 sm:px-6">
              <Button variant="arrowButton" icon={<SlArrowLeft />} onClick={previousSlide} />
              <Button variant="arrowButton" icon={<SlArrowRight />} onClick={nextSlide} />
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-xl">
            <p className="text-gray-600 text-lg font-semibold">Gambar tidak tersedia</p>
          </div>
        )}
      </div>

      {images.length > 0 && (
        <div className="w-full flex justify-center gap-3 my-4">
          {images.map((_, index) => (
            <span key={index} className={`h-3 rounded-full transition-all duration-500 ${index === current ? 'w-10 bg-primary-400' : 'w-3 bg-gray-400'}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
