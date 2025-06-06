export default function HeadingText({ value }) {
  const {
    headingLevel = 'h1',
    width = '100',
    textAlign = 'left',
    text,
  } = value || {};

  if (!text) return null;

  const validHeadingLevels = ['h1', 'h2', 'h3', 'h4'];
  const HeadingTag = validHeadingLevels.includes(headingLevel) ? headingLevel : 'h1';

  return (
    <div className={`heading-text-container ${textAlign}`} style={{ textAlign: `${textAlign}`, justifyContent:`${textAlign == 'center'? 'center' : textAlign== 'right'? 'flex-end': 'flex-start'}` }}>
      <HeadingTag style={{ width: `${width}%`}} className="heading-text">{text}</HeadingTag>
    </div>
  );
}
