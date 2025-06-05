import { getNews, getsettings } from "@/sanity/sanity.utils";
import Layout from "@/app/components/Layout";
import NewsCard from "@/app/components/NewsCard";
import './newscard.scss'
import LineDivider from "../components/LineDivider";
export async function generateMetadata() {
  const settings = await getsettings();

  const title = `${settings?.siteTitle || ""} | Calls & News`;
  const description = settings?.siteDescription || "";
  const seoImage = settings?.seoImg?.asset?.url || "";

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

export default async function Page() {
  const posts = await getNews();

  const isCurrent = (post) => {
    if (!post?.postUntil) return false;
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    return post.postUntil >= today;
  };

  const currentPosts = posts.filter(isCurrent);
  const pastPosts = posts.filter((post) => !isCurrent(post));

  return (
    <Layout>
        {currentPosts.length > 0 && (
          <>
            <h1 className="uppercase">Current Posts</h1>
            {currentPosts.map((post, index) => (
              <NewsCard
                key={post._id ?? index}
                title={post.title}
                slug={post.slug.current}
                description={post.pageDesc}
              />
            ))}
          </>
        )}
        <LineDivider value={{background: "orange"}} />
        {pastPosts.length > 0 && (
          <>
            <h1 className="uppercase">Past Posts</h1>
            {pastPosts.map((post, index) => (
              <NewsCard
                key={post._id ?? index}
                title={post.title}
                slug={post.slug.current}
                description={post.pageDesc}
              />
            ))}
          </>
        )}
 
    </Layout>
  );
}
