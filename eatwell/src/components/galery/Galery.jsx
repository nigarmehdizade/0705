
import React from "react";
import  styles from './Galery.scss'

const images = [
    "https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg.webp" ,
  "https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg.webp",
  "https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg.webp0",
  "https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg.webp",
  "https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg.webp",
  "https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg.webp"
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <p className="gallery-subtitle">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery Item ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
