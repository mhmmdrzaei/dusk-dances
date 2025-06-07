import { PortableText } from '@portabletext/react';
import CTAButton from "@/app/components/CTAButtonBox";
import Image from 'next/image';

export default function TextImageBox({ value }) {
  const { image, textContent = [], alignment = 'textImage', background } = value;
  const imageUrl = image?.asset?.url;
  const altText = image?.alt || 'Image';
  const caption = image?.caption;

  return (
    <div
      className={`text-image-box ${background}-box ${alignment === "textImage"? '': 'revesed'}`}
      style={{ flexDirection: alignment === 'textImage' ? 'row' : 'row-reverse' }}
    >
      <div className="imgBox">
        <div className="imgFrame"></div>
        {imageUrl && (
          <Image src={imageUrl} alt={altText} width={1000} height={800} />
        )}
        {caption && <p className="image-caption">{caption}</p>}
      </div>

      <div className="text-content" style={{ padding: '20px' }}>
        <PortableText value={textContent.filter(item => item._type === 'block')} />
                {textContent
                  .filter((item) => item._type === "ctaButton")
                  .map((cta, index) => (
                    <CTAButton
                      key={index}
                      value={{
                        buttonLabel: cta.buttonLabel,
                        buttonUrl: cta.buttonUrl,
                        openInNewWindow: cta.openInNewWindow,
                        buttonColor: cta.buttonColor,
                        buttonAlignment: cta.buttonAlignment
                      }}
                    />
                  ))}
        
      </div>
    </div>
  );
}
