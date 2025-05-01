export default function SvgIcon({ svgContent, color }) {
  return (
    <span
      className="inline-block"
      style={{ color: color }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
