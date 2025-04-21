export default function LineDivider({
  spacingX = 0,
  spacingY = 0,
  thickness = '2px',
}) {
  return (
    <div
      data-type="lineDivider"
      className={`
       w-full 
       my-8
      `}
      style={{
        paddingLeft: `${spacingX}px`,
        paddingRight: `${spacingX}px`,
      }}
    >
      <hr
        className={`
        w-full 
        border-${thickness}
        bg-gray-200 
      `}
      />
    </div>
  );
}
