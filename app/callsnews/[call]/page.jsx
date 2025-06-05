import { newsBySlugQuery, getsettings } from '@/sanity/sanity.utils';
import Layout from '@/app/components/Layout';
import { componentMap } from '@/app/components/ComponentMap';

export async function generateMetadata() {
  const settings = await getsettings();

  const title = `${settings?.siteTitle || ''} | Calls & News`;
  const description = settings?.siteDescription || '';
  const seoImage = settings?.seoImg?.asset?.url || '';

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

export default async function Page({ params }) {
  const { call: slug } = params;
  const call = await newsBySlugQuery(slug);

  return (
    <Layout>
      <div className="page-container">
        {call.pageBlocks?.map((block) => {
          const BlockComponent = componentMap[block._type];
          if (!BlockComponent) {
            console.warn(`No component for block type: ${block._type}`);
            return null;
          }
          return <BlockComponent key={block._key} value={block} />;
        })}
      </div>
    </Layout>
  );
}
