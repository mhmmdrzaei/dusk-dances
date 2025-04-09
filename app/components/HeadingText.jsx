export default function HeadingText({ headingLevel = 'h1', width = '100', textAlign = 'left', text }) {
  if (!text) return null;

  const HeadingTag = headingLevel;

  return (
    <div style={{ width: `${width}%`, textAlign }}>
      <HeadingTag>{text}</HeadingTag>
    </div>
  );
}
