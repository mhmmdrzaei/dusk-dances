'use client';
import React from 'react';
import Image from 'next/image';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import { urlFor } from '@/sanity/config/client-config';

export default function ImageGallery({ title, images }) {
  console.log('🚀 ~ ImageGallery ~ item:', images);
  return (
    <section className="w-full max-w-6xl mx-auto px-4 my-8" data-type="gallery">
      {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
      <Gallery>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images?.map((item, index) => (
            <Item
              key={index}
              src={urlFor(item.image.asset).url()}
              thumbnail={urlFor(item.image?.asset).url()}
              width={1024}
              height={768}
              alt={item.alt || 'Gallery image'}
              caption={item.caption}
            >
              {({ ref, open }) => (
                <div
                  ref={ref}
                  onClick={open}
                  className="relative aspect-square cursor-pointer group"
                >
                  <Image
                    src={urlFor(item.image.asset).url()}
                    alt={item.alt || 'Gallery image'}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {item.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm">{item.caption}</p>
                    </div>
                  )}
                </div>
              )}
            </Item>
          ))}
        </div>
      </Gallery>
    </section>
  );
}
