export default function LogoContainer({ logos = [] }) {
  return (
    <div>
      {logos.map((logo, index) => (
        <a key={index} href={logo.url} target="_blank" rel="noopener noreferrer">
          <img src={logo.image?.asset?.url} alt={logo.image?.alt || 'Logo'} />
        </a>
      ))}
    </div>
  );
}
