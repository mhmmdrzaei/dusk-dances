import { getSeason, getsettings } from '@/sanity/sanity.utils';
import { componentMap } from '@/app/components/ComponentMap';
import Layout from '@/app/components/Layout';
import SeasonClient from './SeasonClient';

export async function generateMetadata({ params }) {
  const { slug } = params;
  const settings = await getsettings();
  const season = await getSeason(slug);

  const title = `${settings?.siteTitle || ''} | ${season?.title || ''}`;
  const description = season?.seo?.seoDescription || settings?.siteDescription || '';
  const fallbackImage = settings?.seoImg?.asset?.url || '';
  const seoImage = season?.seo?.seoImage?.asset?.url || fallbackImage;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: seoImage,
      images: [{ url: seoImage, width: 1200, height: 628 }],
    },
  };
}

export default async function SeasonPage({ params }) {
  const { slug } = params;
  const season = await getSeason(slug);

  return (
    <Layout>
      <SeasonClient season={season} />
    </Layout>
  );
}
