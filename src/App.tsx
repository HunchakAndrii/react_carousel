import React, { useState } from 'react';
import './App.scss';
import Carousel from './components/Carousel';

const App: React.FC = () => {
  const [images, setImages] = useState<string[]>([
    './img/1.png',
    './img/2.png',
    './img/3.png',
    './img/4.png',
    './img/5.png',
    './img/6.png',
    './img/7.png',
    './img/8.png',
    './img/9.png',
    './img/10.png',
  ]);

  const [itemWidth, setItemWidth] = useState<number>(130);
  const [frameSize, setFrameSize] = useState<number>(3);
  const [step, setStep] = useState<number>(3);
  const [animationDuration, setAnimationDuration] = useState<number>(1000);
  const [infinite, isInfinite] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImages(prevImages => [...prevImages, reader.result as string]);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="App">
      <h1 className="title">Carousel with {images.length} images</h1>

      <Carousel
        images={images}
        step={step}
        frameSize={frameSize}
        itemWidth={itemWidth}
        animationDuration={animationDuration}
        infinite={infinite}
      />

      <form className="form">
        <fieldset>
          <legend>Item Width</legend>
          <input
            className="itemWidth"
            type="number"
            value={itemWidth}
            onChange={event => setItemWidth(+event.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend>Frame Size</legend>
          <input
            className="frameSize"
            type="number"
            value={frameSize}
            onChange={event => setFrameSize(+event.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend>Step</legend>
          <input
            className="step"
            type="number"
            value={step}
            onChange={event => setStep(+event.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend>Animation Duration</legend>
          <input
            className="animationDuration"
            type="number"
            value={animationDuration}
            onChange={event => setAnimationDuration(+event.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend>Add Image</legend>
          <input
            className="addFile"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </fieldset>

        <fieldset>
          <legend>Do you love infinite Carousel ?</legend>
          <select
            name="infiniteCarousel"
            value={infinite ? 'true' : 'false'}
            onChange={event => isInfinite(event.target.value === 'true')}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </fieldset>
      </form>
    </div>
  );
};

export default App;
