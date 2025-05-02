export default function LogoContainer({ value }) {
  const { logos = [] } = value;

  return (
    <div className="logo-container">
      {logos.map((logo, index) => (
        <a key={index} href={logo.url} target="_blank" rel="noopener noreferrer">
          <img
            src={logo.image?.asset?.url}
            alt={logo.image?.alt || 'Logo'}
            className="logo-image"
          />
        </a>
      ))}
    </div>
  );
}
