export default function LocationDisplay({ season, location, componentMap }) {
  const sideInfo = location?.seasonInformation || season?.seasonInformation || {};
  const { pageSideText = [], poster, googleMapsLink } = sideInfo;
  const { additionalSiteLocation = [], pageDetailsBlocks = [] } = season;

  return (
    <div className="season-main-grid">
      {/* Left content area */}
      <div className="season-main-left">
        {additionalSiteLocation.map((block) => {
          const BlockComponent = componentMap[block._type];
          return BlockComponent ? (
            <BlockComponent key={block._key} value={block} />
          ) : null;
        })}

        {pageDetailsBlocks.map((block) => {
          const BlockComponent = componentMap[block._type];
          return BlockComponent ? (
            <BlockComponent key={block._key} value={block} />
          ) : null;
        })}
      </div>

      {/* Sidebar */}
      <div className="season-sidebar">
        {poster?.asset?.url && (
          <div className="sidebar-poster">
            <img src={poster.asset.url} alt={poster.alt || ''} />
            {poster.alt && <p className="poster-caption">{poster.alt}</p>}
          </div>
        )}

        {pageSideText.map((block, i) => {
          const BlockComponent = componentMap[block._type];
          return BlockComponent ? (
            <BlockComponent key={block._key || i} value={block} />
          ) : null;
        })}

        {googleMapsLink && (
          <div
            className="sidebar-map"
            dangerouslySetInnerHTML={{ __html: googleMapsLink }}
          />
        )}
      </div>
    </div>
  );
}
