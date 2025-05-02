"use client"
import Image from "next/image";
import Slider from 'react-slick';


export default function ImageCarousel({ value }) {
  const { title, slides } = value;

  // Slick settings for the carousel
  const settings = {
    infinite: true,
    autoplay: false,
    autoplaySpeed: 0, // Autoplay without delay between slides
    speed: 500, // Set the speed of the slide transition (500ms)
    cssEase: 'linear', // Smooth and linear transition
    arrows: true, // Show arrows for navigation
    dots: false, // No dots for desktop (optional)
    slidesToShow: 1, // Show one image at a time
    slidesToScroll: 1, // Scroll one image at a time
    centerMode: true, // Enable centering for better slide effect
    variableWidth: true, // Make the carousel images variable width
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          speed: 300,
          autoplay: false, // Disable autoplay on mobile
          cssEase: 'ease', // Default easing
          slidesToShow: 1, // Show one image at a time on mobile
          slidesToScroll: 1, // Scroll one image at a time on mobile
          dots: true, // Show dots for navigation on mobile
          arrows: true, // Show arrows for manual sliding on mobile
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <div className="carousel-title">
        {title && <h2>{title}</h2>} 
      </div>

      <Slider {...settings}>
        {slides?.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <Image
              src={slide.image?.asset?.url || '/placeholder.jpg'}
              alt={slide.image?.alt || 'Gallery image'}
              width={1200}
              height={800}
              className="carousel-image"
              loading="lazy"
            />
            {slide.caption && <p className="carousel-caption">{slide.caption}</p>}
          </div>
        ))}
      </Slider>
    </div>
  );
}
