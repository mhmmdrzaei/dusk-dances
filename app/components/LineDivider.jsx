export default function LineDivider({ value }) {
  const { background } = value;

  // Set background color based on the selected option
  const lineColorClass = background.toLowerCase();

  return <hr className={`line-divider ${lineColorClass}`} />;
}
