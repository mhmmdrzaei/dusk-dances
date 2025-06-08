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

            {imageUrl && (
              <div className="hero-image">
                <div className="background"></div>

                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  width={1600}
                  height={900}
                  
                />
             
              </div>
            )}
             {text && <div className="hero-text"><h2>{text}</h2></div>}
               
            
        </Link>
      ) : (
          <>
          {imageUrl && (
            <div className="hero-image">
              <div className="background"></div>
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={1600}
                height={900}
                
              />
            
            </div>
          )}
          {text && <div className="hero-text"><h2>{text}</h2></div>}
        </>
      )}
      {imageCaption && <p className="image-caption">{imageCaption}</p>}
    </section>
  );
}
