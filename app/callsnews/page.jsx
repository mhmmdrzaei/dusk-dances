import { getNews, getsettings } from '@/sanity/sanity.utils';
import Layout from '@/app/components/Layout';
import NewsCard from '@/app/components/NewsCard';

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

export default async function Page() {
  const news = await getNews();

  const currentCalls = news.filter((item) =>
    item.isPostActive?.includes('current')
  );
  const pastCalls = news.filter((item) => item.isPostActive?.includes('past'));

  return (
    <Layout>
      <h1>Current Calls / News</h1>
      {currentCalls?.map((call, index) => (
        <NewsCard
          key={call._id ?? index}
          title={call.title}
          slug={call.slug.current}
          description={call.pageDesc}
        />
      ))}
      <h2>Past Calls</h2>
      {pastCalls?.map((call, index) => (
        <NewsCard
          key={call._id ?? index}
          title={call.title}
          slug={call.slug.current}
          description={call.pageDesc}
        />
      ))}
    </Layout>
  );
}
