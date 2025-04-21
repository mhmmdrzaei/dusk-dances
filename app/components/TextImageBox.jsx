import { PortableText } from '@portabletext/react';
import CTAButton from './CtaButton';
import Image from 'next/image';
import { urlFor } from '@/sanity/config/client-config';

export default function TextImageBox({
  image,
  textContent = [],
  alignment = 'textImage',
}) {
  return (
    <section
      data-type="textImageBox"
      style={{
        display: 'flex',
        flexDirection: alignment === 'textImage' ? 'row' : 'row-reverse',
        alignItems: 'center',
      }}
      className="my-8"
    >
      {image.asset?._ref && (
        <div style={{ flex: 1 }}>
          <Image
            src={urlFor(image.asset).url()}
            alt={image?.alt || 'Image'}
            style={{ width: '100%' }}
            width="100"
            height="100"
          />
          {image?.caption && <p>{image.caption}</p>}
        </div>
      )}
      <div style={{ flex: 1, padding: '20px' }}>
        <PortableText
          value={textContent.filter((item) => item._type === 'block')}
        />
        {textContent
          .filter((item) => item._type === 'ctaButton')
          .map((cta, index) => (
            <CTAButton key={index} {...cta} />
          ))}
      </div>
    </section>
  );
}
