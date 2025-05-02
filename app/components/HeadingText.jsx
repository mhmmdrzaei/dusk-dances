export default function HeadingText({ headingLevel = 'h1', width = '100', textAlign = 'left', text }) {
  if (!text) return null;

  const validHeadingLevels = ['h1', 'h2', 'h3', 'h4'];
  const HeadingTag = validHeadingLevels.includes(headingLevel) ? headingLevel : 'h1';

  return (
    <div className={`heading-text-container ${textAlign}`} style={{ width: `${width}%` }}>
      <HeadingTag className="heading-text">{text}</HeadingTag>
    </div>
  );
}
