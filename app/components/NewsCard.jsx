import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import CTAButton from './CTAButtonBox';

const linkResolver = (link) => {
  if (!link) {
    return null;
  }
  const isExternalLink = link?.startsWith('http');
  if (isExternalLink) {
    return link;
  }

  if (link?.includes('callsnews')) {
    return `/${link}`;
  }

  return `callsnews/${link}`;
};
export default function NewsCard({ title, slug, description }) {
  const link = linkResolver(slug);
  return (
    <section className="news-container">
      <h2 className="news-title">{title}</h2>
      {description && (
        <div className="news-description">
          <PortableText value={description} />
        </div>
      )}
      {link && (
                    <CTAButton
                  
                      value={{
                        buttonLabel: "Read More",
                        buttonUrl: link,
                        openInNewWindow: false,
                        buttonColor: "pink",
                        buttonAlignment: "right"
                      }}
                    />
      )}
    </section>
  );
}
