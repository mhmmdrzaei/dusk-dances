import { getAllStaff, getsettings } from '@/sanity/sanity.utils';
import Layout from '@/app/components/Layout';
import Staff from '@/app/components/StaffPage';

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

export default async function MembersPage({ params }) {
  const role = (await params).role;
  const allStaff = await getAllStaff();

  const filteredStaff = allStaff.filter((staff) => staff.role === role);

  return (
    <Layout>
      <Staff staff={filteredStaff} />
    </Layout>
  );
}
