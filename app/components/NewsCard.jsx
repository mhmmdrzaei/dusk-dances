import Link from 'next/link';
import { PortableText } from '@portabletext/react';

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
    <section className="hero-container">
      <h2 className="news-title">{title}</h2>
      {description && (
        <div className="news-description">
          <PortableText value={description} />
        </div>
      )}
      {link && (
        <Link href={link} className="news-link">
          Learn More
        </Link>
      )}
    </section>
  );
}
