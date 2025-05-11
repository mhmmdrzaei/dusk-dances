import Image from 'next/image';
import { PortableText } from 'next-sanity';
import { getSeasons, getsettings } from '@/sanity/sanity.utils';
import Layout from '../components/Layout';



export async function generateMetadata() {
  const settings = await getsettings();
  const title = `${settings?.siteTitle || ''} |'Seasons Archives'`;
  const description = settings?.siteDescription || '';

  const fallbackImage = settings?.seoImg?.asset?.url || '';
  const seoImage = fallbackImage;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: seoImage,
      siteName: settings?.siteTitle || '',
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 628,
        },
      ],
      locale: 'en_CA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [seoImage],
    },
  };
}

  
export default async function Seasons() {
  const seasons = await getSeasons();

  if (!seasons) return <div>No seasons found</div>;

  return (
    <Layout>
      <div className="seasons-archive-page">
        {seasons.map((season) => {
          const {
            title,
            slug,
            pageDesc,
            seasonInformation,
            seasonsLocations = [],
          } = season;

          const primaryPoster = seasonInformation?.poster;
          const fallbackPoster =
            seasonsLocations?.find((loc) => loc.seasonInformation?.poster?.asset)?.seasonInformation?.poster;

          const poster = primaryPoster?.asset?.url ? primaryPoster : fallbackPoster;

          return (
            <div key={slug.current} className="season-entry">
              <div className="season-entry-left">
                <h2>{title}</h2>
                {pageDesc && <PortableText value={pageDesc} />}
              </div>

              {seasonsLocations?.length > 0 && (
                <div className="season-entry-locations">
                  {seasonsLocations.map((loc) => (
                    <a
                      key={loc.slug?.current}
                      href={`/seasons/${slug.current}#${loc.slug.current}`}
                      className="season-location-button"
                    >
                      {loc.title}
                    </a>
                  ))}
                </div>
              )}

              <div className="season-entry-right">
                {poster?.asset?.url && (
                  <Image
                    src={poster.asset.url}
                    alt={poster.alt || 'Season Poster'}
                    width={500}
                    height={700}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
