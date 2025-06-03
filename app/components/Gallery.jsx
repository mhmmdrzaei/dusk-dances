"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Gallery({ value }) {
  const { title, images = [] } = value;
  const fallback = '/placeholder.jpg';
  const firstImage = images[0]?.image?.asset?.url || fallback;

  const [largeImage, setLargeImage] = useState(firstImage);

  return (
    <div className="gallery-container">
      {title && <h2 className="gallery-title">{title}</h2>}

      <div className="gallery-large-image">
        <Image
          src={largeImage}
          alt="Selected Gallery Image"
          fill
          className="gallery-image"
          priority
        />
      </div>

      <div className="gallery-thumbnails">
        {images.map((img, i) => {
          const url = img.image?.asset?.url || fallback;
          return (
            <button
              key={i}
              onClick={() => setLargeImage(url)}
              className={`thumbnail-button ${url === largeImage ? 'active' : ''}`}
            >
              <Image
                src={url}
                alt={img.image?.alt || `Thumbnail ${i + 1}`}
                fill
                className="thumbnail-image"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
