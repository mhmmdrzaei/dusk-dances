"use client"
import { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

export default function Gallery({ value }) {
  const { title, images } = value;
  const [largeImage, setLargeImage] = useState(images[0]?.image?.asset?.url || '/placeholder.jpg'); 

  const handleThumbnailClick = (url) => {
    if (url) {
      setLargeImage(url);
    }
  };

  const mainSliderSettings = {
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 1,
    focusOnSelect: true,
  };

  const thumbnailSliderSettings = {
    infinite: true,
    slidesToShow: 5,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '10px',
    arrows: false, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, 
        },
      },
    ],
  };

  return (
    <div className="gallery-container">
      {/* Gallery Title */}
      {title && <h2 className="gallery-title">{title}</h2>}

      {/* Main Image Slider */}
      <div className="main-image-slider">
        <Slider {...mainSliderSettings}>
          {images.map((image, index) => {
            const imageUrl = image.image?.asset?.url || '/placeholder.jpg'; // Use placeholder if URL is missing
            return (
              <div key={index} className="main-image-slide">
                <Image
                  width={700}
                  height={800}
                  src={largeImage === imageUrl ? imageUrl : '/placeholder.jpg'} // add this 
                  alt={image.image?.alt || 'Gallery Image'}
                  className="main-gallery-image"
                  loading="lazy" 
                />
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="thumbnail-slider">
        <Slider {...thumbnailSliderSettings}>
          {images.map((image, index) => {
            const imageUrl = image.image?.asset?.url || '/placeholder.jpg'; // gotta add this
            return (
              <div
                key={index}
                className="thumbnail-slide"
                onClick={() => handleThumbnailClick(imageUrl)} 
              >
                <Image
                  width={100}
                  height={100}
                  src={imageUrl}
                  alt={image.image?.alt || 'Thumbnail Image'} 
                  className="thumbnail-image"
                  loading="lazy" 
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
