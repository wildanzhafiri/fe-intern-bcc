import { useState, useEffect } from 'react';

const images = [
  ['https://www.incharge.org/wp-content/uploads/2019/08/lower-rent.jpg', 'https://files.theinteriorsaddict.com/uploads/2014/07/Royal-wolf-container-room-studio.jpg'],
  ['https://i.pinimg.com/736x/ae/c2/0d/aec20d200a5a4e907ba9553f0e7aef53.jpg', 'https://i.pinimg.com/736x/f1/6f/2a/f16f2a11fd92685f77eaa1ed86d9626b.jpg'],
  ['https://i.pinimg.com/736x/6c/a8/02/6ca80277c4de3949cbf863858c08873c.jpg', 'https://i.pinimg.com/736x/95/89/c2/9589c200968b7bb9e4e677feaa117dc5.jpg'],
  ['https://i.pinimg.com/736x/f4/8b/c4/f48bc44bdf3847d4e91cae3525b94873.jpg', 'https://i.pinimg.com/736x/af/76/90/af7690bd5c902cd26e9cc87601ca1278.jpg'],
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
              className="flex w-full flex-shrink-0 gap-2 sm:gap-4 md:gap-6 
                        flex-col sm:flex-row"
            >
              <div className="w-full h-[250px] sm:w-1/2 sm:h-[300px] lg:h-[400px]">
                <img src={pair[0]} alt={`Slide ${index + 1} - Image 1`} className="w-full h-full rounded-xl object-cover" />
              </div>

              <div className="w-full h-[250px] sm:w-1/2 sm:h-[300px] lg:h-[400px]">
                <img src={pair[1]} alt={`Slide ${index + 1} - Image 2`} className="w-full h-full rounded-xl object-cover" />
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
