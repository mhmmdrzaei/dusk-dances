'use client';
import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/config/client-config';

export default function ImageCustom({ width = 'full', image, alt, caption }) {
  const widthClasses = {
    full: 'w-full',
    '3/4': 'w-3/4',
    '1/2': 'w-1/2',
  };

  return (
    <div
      className={`mx-auto my-8 ${widthClasses[width] || 'w-full'}`}
      data-type="imageCustom"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={urlFor(image.asset).url()}
          alt={alt || 'Image'}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      {caption && (
        <p className="text-sm text-gray-600 mt-2 italic">{caption}</p>
      )}
    </div>
  );
}
