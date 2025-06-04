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
    <div className={`ctaButton ${buttonColor == "blue"? "btn-blue": "btn-pink"}`} style={{ justifyContent:`${buttonAlignment == "left"? "flex-start": buttonAlignment =="center" ? "center": "flex-end"}` }} data-type="ctaButton">
      <a
        href={buttonUrl}
        target={openInNewWindow ? '_blank' : '_self'}
        rel={openInNewWindow ? 'noopener noreferrer' : ''}
      >
        {buttonLabel}
      </a>
    </div>
  );
}
