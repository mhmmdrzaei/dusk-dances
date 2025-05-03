import Link from 'next/link';
import Image from 'next/image';

export default function Hero({ value }) {
  const { image, text, heroLinksTo } = value;
  const imageUrl = image?.asset?.url;
  const imageAlt = image?.alt || 'Hero Image';
  const imageCaption = image?.imageCaption;

  return (
    <section className="hero-container">
      {heroLinksTo ? (
        <Link href={heroLinksTo}>
          <div className="hero-box">
            {imageUrl && (
              <div className="hero-image">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  width={1200}
                  height={628}
                  
                />
                {imageCaption && <p className="hero-caption">{imageCaption}</p>}
              </div>
            )}
            {text && <div className="hero-text">{text}</div>}
          </div>
        </Link>
      ) : (
        <div className="hero-box">
          {imageUrl && (
            <div className="hero-image">
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={1200}
                height={628}
                
              />
              {imageCaption && <p className="hero-caption">{imageCaption}</p>}
            </div>
          )}
          {text && <div className="hero-text">{text}</div>}
        </div>
      )}
    </section>
  );
}
