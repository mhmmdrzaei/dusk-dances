import { PortableText } from '@portabletext/react';
import CTAButton from './CtaButton';
export default function TextImageBox({ image, textContent = [], alignment = 'textImage' }) {
  return (
    <div style={{ display: 'flex', flexDirection: alignment === 'textImage' ? 'row' : 'row-reverse', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <img src={image?.asset?.url} alt={image?.alt || 'Image'} style={{ width: '100%' }} />
        {image?.caption && <p>{image.caption}</p>}
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <PortableText value={textContent.filter(item => item._type === 'block')} />
        {textContent.filter(item => item._type === 'ctaButton').map((cta, index) => (
          <CTAButton key={index} {...cta} />
        ))}
      </div>
    </div>
  );
}
