export default function CTAButton({
  buttonLabel,
  buttonUrl,
  openInNewWindow = false,
  buttonColor = 'black',
  buttonAlignment = 'left',
}) {
  if (!buttonLabel || !buttonUrl) return null;

  return (
    <div
      className="cta-button-container"
      style={{ textAlign: buttonAlignment }}
      data-type="ctaButton"
    >
      <a
        href={buttonUrl}
        target={openInNewWindow ? '_blank' : '_self'}
        rel={openInNewWindow ? 'noopener noreferrer' : ''}
        className="cta-button-link"
        style={{
          backgroundColor: buttonColor,
          color: 'white',
        }}
      >
        {buttonLabel}
      </a>
    </div>
  );
}
