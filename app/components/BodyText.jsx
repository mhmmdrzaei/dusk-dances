import { PortableText } from '@portabletext/react';

export default function BodyText({ width = '100', content, background = 'white' }) {
  return (
    <section style={{ width: `${width}%`, backgroundColor: background, color: background === 'black' ? 'white' : 'black' }}>
      <PortableText value={content} />
    </section>
  );
}
