import Image from 'next/image';
import { PortableText } from 'next-sanity';
import { getSeasons, getsettings } from '@/sanity/sanity.utils';
import Layout from '../components/Layout';



export async function generateMetadata() {
  const settings = await getsettings();
  const title = `${settings?.siteTitle || ''} |'Seasons Archives'`;
  const description = page?.seo?.seoDescription || settings?.siteDescription || '';

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
  const homeSlug = 'home'; // Or whatever your homepage slug is
  const seasons = await getSeasons();

  if (!pageData) {
    return <div>Home page not found</div>;
  }

  return (
        <Layout>
        <div className="page-container">
    
            
    
        </div>
        </Layout>
  );
}
