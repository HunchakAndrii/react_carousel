import React, { useState } from 'react';
import './Carousel.scss';

interface CarouselProps {
  images: string[];
  step: number;
  frameSize: number;
  itemWidth: number;
  animationDuration: number;
  infinite: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  step,
  frameSize,
  itemWidth,
  animationDuration,
  // infinite,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveNext = () => {
    if (!Number.isInteger(images.length / frameSize)) {
      if (currentIndex < images.length / frameSize - 2) {

      }
    }

    if (currentIndex < images.length / frameSize - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="Carousel">
      <ul
        className="Carousel__list"
        style={{ width: `${frameSize * itemWidth}px` }}
      >
        {images.map((image, i) => (
          <li
            key={image}
            style={{
              transform: `translateX(-${currentIndex * (step * 100)}%)`,
              width: `${itemWidth}px`,
              transition: `transform ${animationDuration}ms cubic-bezier(0.25, 0.1, 0.25, 1)`,
            }}
          >
            <img src={image} alt={`${i + 1}`} />
          </li>
        ))}
      </ul>

      <div className="btns">
        <button className="prev" onClick={movePrev}>
          Prev
        </button>

        <button className="next" onClick={moveNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
