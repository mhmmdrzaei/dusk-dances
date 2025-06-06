import Image from 'next/image';

export default function ImageCustom({ value }) {
  const { image, alt, caption, width } = value;

  if (!image) return null; 


  const imageWidthClass = width === 'half' ? 'half-width' : 'full-width';

  return (
    <div className={`image-custom-container ${imageWidthClass}`}>

        <Image
          src={image?.asset?.url || '/placeholder.jpg'}
          alt={alt || 'Image'}
          width={1200}
          height={800}
          className="custom-image"
          loading="lazy"
        />
      {caption && <p className="image-caption">{caption}</p>}
    </div>
  );
}
