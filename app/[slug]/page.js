import Image from "next/image";
import { getsettings } from "@/sanity/sanity.utils";
import { pageBySlugQuery } from "@/sanity/sanity.utils";
import Layout from "../components/Layout";
import { componentMap } from "../components/ComponentMap";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const settings = await getsettings();
  const page = await pageBySlugQuery(slug);

  const title = `${settings?.siteTitle || ""} | ${page.seo?.seoTitle ? `${page.seo.title}` : `${page?.title}`}`;
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

// This function handles fetching page content based on slug
export default async function Page({ params }) {
  const { slug } = await params;
  const pageData = await pageBySlugQuery(slug);

  if (!pageData) {
    return (
      <Layout>
        <div className="not-found">
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <Link href="/">Go back to home</Link>
        </div>
      </Layout>
    );
  }

  const { title, pageBlocks } = pageData;

  return (
    <Layout>
      {pageBlocks?.map((block) => {
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
