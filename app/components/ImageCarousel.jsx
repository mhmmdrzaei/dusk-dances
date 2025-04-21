'use client';
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { urlFor } from '@/sanity/config/client-config';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ImageCarousel({ title, autoplay = false, slides }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: false,
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 my-8">
      {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
      <div className="h-[500px]">
        <Slider {...settings}>
          {slides?.map((slide, index) => (
            <div key={index} className="relative h-[500px]">
              <Image
                src={urlFor(slide.image.asset).url()}
                alt={slide.image.alt || slide.alt || 'Carousel image'}
                fill
                className="object-contain"
                priority={index === 0}
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              {slide.caption && (
                <p className="absolute bottom-4 left-4 bg-black/60 text-white p-2 rounded">
                  {slide.caption}
                </p>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
