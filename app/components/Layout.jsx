import Header from './Header';
import Footer from './Footer';
import { getsettings } from '@/sanity/sanity.utils';

export default async function Layout({ children }) {
  const settings = await getsettings();
  return (
    <>
      <Header settings={settings} />
      <main className='page-container'>{children}</main>
      <Footer settings={settings} />
    </>
  );
}
