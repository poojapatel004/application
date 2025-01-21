//implement image changer with useeffect  
//create a list of 4 images: Change image at interval of 4 seconds
"../../public/"
import React, { useState, useEffect } from 'react';

const ImageChanger = () => {
  const images = [
    'bird.jpg',
    'kanha.jpg',
    'girl.jpg',
    'cat.webp',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);
  return (
    <div style={{ width: '600px', 
        height: '400px', 
        overflow: 'hidden', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'relative'}}>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};
export default ImageChanger;