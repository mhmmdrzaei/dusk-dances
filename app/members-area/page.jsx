import { getMemberArea,getPassword, getsettings } from '@/sanity/sanity.utils'
import MembersAreaGate from '../components/MemberAreaGate'
import Layout from '../components/Layout'
import { Metadata } from 'next'

export async function generateMetadata() {
  const settings = await getsettings();

  const title = `${settings?.siteTitle || ''} | Members Area`;
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

export default async function MembersAreaPage() {
  const posts = await getMemberArea()
  const password = await getPassword()
  console.log(password)

  return (
    <Layout>
            test
            <MembersAreaGate posts={posts} requiredPassword={password.membersAreaPassword} />

    </Layout>

  )
}
