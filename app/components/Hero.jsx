import Image from 'next/image';
import React from 'react';
import { urlFor } from '@/sanity/config/client-config';

export default function Hero({ image, imageCaption, text, title }) {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px]">
      {image?.asset && (
        <Image
          src={urlFor(image.asset).url()}
          alt={image.alt || 'Hero image'}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/40">
        <div className="container mx-auto px-4 h-full grid place-items-center">
          {title && (
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
          )}
          {text && <p className="text-xl text-white mb-6">{text}</p>}
          {imageCaption && (
            <p className="text-sm text-white/80 mt-auto">{imageCaption}</p>
          )}
        </div>
      </div>
    </section>
  );
}
