export default function CTAButton({ value }) {

  const {
    buttonLabel = 'Default Button',
    buttonUrl,
    openInNewWindow = false,
    buttonColor = 'orange',
    buttonAlignment = 'left',
  } = value || {}; 

  if (!buttonLabel || !buttonUrl) return null;

  return (
    <div style={{ textAlign: buttonAlignment }} data-type="ctaButton">
      <a
        href={buttonUrl}
        target={openInNewWindow ? '_blank' : '_self'}
        rel={openInNewWindow ? 'noopener noreferrer' : ''}
        style={{
          backgroundColor: buttonColor,
          color: 'white',
          padding: '10px 20px',
          display: 'inline-block',
          textDecoration: 'none',
        }}
      >
        {buttonLabel}
      </a>
    </div>
  );
}
