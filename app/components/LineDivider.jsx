export default function LineDivider({ value }) {
  const { background } = value;
  const lineColorClass = background.toLowerCase();

  return (
    <div className="line-divider-wrapper">
      <div className={`line-divider ${lineColorClass == "pink"? "pink-line": "orange-line"}`}>
        <hr />
      </div>
    </div>
  );
}
