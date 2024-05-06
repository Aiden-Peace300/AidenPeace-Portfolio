import { useState, useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import './Carousel.css';

interface CarouselProps {
  images: string[];
  link: string | null;
  title?: string | null;
  projectDetails?: string | null;
  flexDirection?: string | null;
}
const Carousel: React.FC<CarouselProps> = ({ images, link }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <div
        style={{
          display: 'flex',
          transition: 'transform 0.5s',
          transform: `translateX(-${currentIndex * 100}%)`,
        }}>
        {images.map((image, index) => (
          <div key={index} className="image-container">
            {index === currentIndex && <BsChevronLeft className="left-arrow" onClick={goToPrevSlide} />}
            <img
              src={image}
              alt={`slide-${index}`}
              style={{ width: '100%', display: 'block' }}
            />
            {index === currentIndex && <BsChevronRight className="right-arrow" onClick={goToNextSlide} />}
          </div>
        ))}
      </div>
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
          marginTop: '1rem',
          marginBottom: '1rem',
          textAlign: 'center',
        }}>
        {images.map((_, index) => (
          <FaCircle
            key={index}
            onClick={() => handleDotClick(index)}
            style={{
              cursor: 'pointer',
              margin: '0 5px',
              color: index === currentIndex ? '#0088A9' : 'gray', // Active circle is blue
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
