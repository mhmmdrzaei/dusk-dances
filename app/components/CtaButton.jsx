export default function CTAButton({ 
  buttonLabel, 
  buttonUrl, 
  openInNewWindow = false, 
  buttonColor = 'black', 
  buttonAlignment = 'left' 
}) {
  if (!buttonLabel || !buttonUrl) return null;

  return (
    <div style={{ textAlign: buttonAlignment }}>
      <a 
        href={buttonUrl} 
        target={openInNewWindow ? '_blank' : '_self'} 
        rel={openInNewWindow ? 'noopener noreferrer' : ''}
        style={{ backgroundColor: buttonColor, color: 'white', padding: '10px 20px', display: 'inline-block', textDecoration: 'none' }}
      >
        {buttonLabel}
      </a>
    </div>
  );
}
