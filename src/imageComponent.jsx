import React from 'react';
import './ImageComponent.css';

const ImageComponent = () => {
  return (
    <div className="image-container">
      <div className="image-row">
        <img src={require('./assets/moon1.jpg').default} alt="Image 1" className="image1" />
        <img src={require('./assets/moon2.jpg').default} alt="Image 2" className="image2" />
        <img src={require('./assets/moon3.jpg').default} alt="Image 3" className="image3" />
        <img src={require('./assets/moon4.jpg').default} alt="Image 4" className="image4" />
      </div>
      <div className="text-area">
        <p>MoonWalker</p>
      </div>
    </div>
  );
};

export default ImageComponent;
