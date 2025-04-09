import Image from 'next/image';


export default  function Footer({settings}) {


  return (
    <footer>
      {settings?.footerLogo && (
        <Image 
          src={settings.footerLogo.asset.url} 
          alt="Footer Logo" 
          width={300} 
          height={50} 
        />
      )}
      <nav>
        <ul>
          {settings?.footerMenu?.map((item, index) => (
            <li key={index}>
              <a href={item.menuItemUrl}>{item.menuItemName}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        {settings?.socialLinks?.map((social, index) => (
          <a key={index} href={social.socialLink} target="_blank" rel="noopener noreferrer">
            {social.icon}
          </a>
        ))}
      </div>
      {settings?.email && (
        <p>
          <a href={`mailto:${settings.email.emailUrl}`}>{settings.email.emailLabel}</a>
        </p>
      )}
    </footer>
  );
}
