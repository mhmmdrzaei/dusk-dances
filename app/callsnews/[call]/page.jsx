import { newsBySlugQuery, getsettings } from '@/sanity/sanity.utils';
import Layout from '@/app/components/Layout';
import { componentMap } from '@/app/components/ComponentMap';

export async function generateMetadata() {
  const settings = await getsettings();
  const page = await newsBySlugQuery(slug);

  const title = `${settings?.siteTitle || ""} | ${page.seo.seoTitle? page.seo.title :page?.title }`;
  const description =
    page?.seo?.seoDescription || settings?.siteDescription || "";

  const fallbackImage = settings?.seoImg?.asset?.url || "";
  const seoImage = fallbackImage || page?.seo?.seoImage?.asset?.url;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: seoImage,
      siteName: settings?.siteTitle || "",
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 628,
        },
      ],
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
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
        {call.pageBlocks?.map((block) => {
          const BlockComponent = componentMap[block._type];
          if (!BlockComponent) {
            console.warn(`No component for block type: ${block._type}`);
            return null;
          }
          return <BlockComponent key={block._key} value={block} />;
        })}
    </Layout>
  );
}
