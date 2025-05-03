import { newsBySlugQuery, getsettings } from '@/sanity/sanity.utils';
import { componentMap } from '@/app/components/ComponentMap';
import Layout from '@/app/components/Layout';

export async function generateMetadata({ params }) {
  const { slug } =  await params;
  const settings = await getsettings();
  const page = await newsBySlugQuery(slug);

  const title = `${settings?.siteTitle || ''} | ${page?.title || ''}`;
  const description = page?.seo?.seoDescription || settings?.siteDescription || '';

  const fallbackImage = settings?.seoImg?.asset?.url || '';
  const seoImage = page?.seo?.seoImage?.asset?.url || fallbackImage;

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

export default async function NewsPage({ params }) {
  const { slug } = await params;
  const pageData = await newsBySlugQuery(slug);

  if (!pageData) {
    return <div>Page not found</div>;
  }

  const { title, pageBlocks } = pageData;
  return (
    <Layout>
      <div className="page-container">
        {pageBlocks?.map((block) => {
          const BlockComponent = componentMap[block._type];
          if (!BlockComponent) {
            console.warn(`No component for block type: ${block._type}`);
            return null;
          }
          return <BlockComponent key={block._key} {...block} />;
        })}
      </div>
    </Layout>
  );
}
