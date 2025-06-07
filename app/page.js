import Image from "next/image";
import { PortableText } from "next-sanity";
import { pageBySlugQuery, getsettings } from "@/sanity/sanity.utils";
import Page from "./[slug]/page";
import Layout from "./components/Layout";
import Link from "next/link";

export async function generateMetadata() {
  const settings = await getsettings();
  const page = await pageBySlugQuery("home");
  const title = `${settings?.siteTitle || ""} | ${page.seo?.seoTitle ? `${page.seo.title}` : `${page?.title}`}`;
  const description =
    page?.seo?.seoDescription || settings?.siteDescription || "";

  const fallbackImage = settings?.seoImg?.asset?.url || "";
  const seoImage = page?.seo?.seoImage?.asset?.url || fallbackImage;

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

export default async function Home() {
  const homeSlug = "home"; // Or whatever your homepage slug is
  const pageData = await pageBySlugQuery(homeSlug);

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

  return <Page params={{ slug: homeSlug }} />;
}
