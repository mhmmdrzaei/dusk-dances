import { getMembers, getStaff, getMentors, getsettings } from '@/sanity/sanity.utils';
import MembersTabs from '../components/MembersTab';
import Layout from '../components/Layout';

export async function generateMetadata() {
  const settings = await getsettings();

  const title = `${settings?.siteTitle || ''} | Members Directory`;
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

export default async function MembersPage() {
  const mentors = await getMentors();
  const staff = await getStaff();
  const members = await getMembers();

  return (
    <Layout>
      <h1>Meet Our Team</h1>
      <MembersTabs members={members} mentors={mentors} staff={staff} />
    </Layout>
  );
}
