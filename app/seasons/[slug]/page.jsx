import { getSeason, getsettings } from '@/sanity/sanity.utils';
import { componentMap } from '@/app/components/ComponentMap';
import Layout from '@/app/components/Layout';
import SeasonClient from './SeasonClient';
import './seasons.scss'

export async function generateMetadata({ params }) {
  const { slug } =  await params;
  const settings = await getsettings();
  const page = await getSeason(slug);

  const title = `${settings?.siteTitle || ""} | ${page?.seo?.seoTitle || page?.title || ""}`;
  const description = page?.seo?.seoDescription || settings?.siteDescription || "";

  const fallbackImage = settings?.seoImg?.asset?.url || "";
  const seoImage = page?.seo?.seoImage?.asset?.url || fallbackImage;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 628,
        },
      ],
      siteName: settings?.siteTitle || "",
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

export default async function SeasonPage({ params }) {
    const { slug } = await params;
  const season = await getSeason(slug);

  return (
    <Layout>
      <SeasonClient season={season} />
    </Layout>
  );
}
