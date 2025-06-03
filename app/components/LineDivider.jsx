export default function LineDivider({ value }) {
  const { background } = value;
  const lineColorClass = background.toLowerCase();

  return (
    <div className="line-divider-wrapper">
      <div className={`line-divider ${lineColorClass}-line`}>
        <hr />
      </div>
    </div>
  );
}
