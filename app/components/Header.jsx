import Image from 'next/image';
import Link from 'next/link';


export default function Header({settings}) {


  return (
    <header className='flex flex-wrap w-full'>

      <nav>
        <ul className='flex flex-wrap'>
          {settings?.headingMenu?.map((item, index) => (
            <li key={index}>
              <a href={item.menuItemUrl}>{item.menuItemName}</a>
            </li>
          ))}
        </ul>
      </nav>
      {settings?.headingLogo && (
        <Link href={"/"}>        
        <Image 
        src={settings.headingLogo.asset.url} 
        alt="Logo" 
        width={400} 
        height={300} 
      />
      </Link>

      )}
    </header>
  );
}
