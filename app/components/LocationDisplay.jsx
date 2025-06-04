import { PortableText } from "next-sanity";
import CTAButton from "./CTAButtonBox";
import BodyText from "./BodyText";

export default function LocationDisplay({
  season,
  location,
  locations,
  setActiveLocation,
  componentMap,
}) {
  const sideInfo =
    location?.seasonInformation || season?.seasonInformation || {};
  const { pageSideText = [], poster, googleMapsLink, } = sideInfo;
  const { additionalSiteLocation } = location || {};
const { pageDetailsBlocks = [] } = season;



  return (
    <div className="season-main-grid">
      {/* Left content area */}
      <div className="season-main-left">
        {additionalSiteLocation && (
          <BodyText value={additionalSiteLocation} />
        )}
        

        {pageDetailsBlocks.map((block,i) => {
          const BlockComponent = componentMap[block._type];
          return BlockComponent ? (
            <BlockComponent key={block._key} value={block}  initialOpen={i === 0 && block._type === 'accordionText'} />
          ) : null;
        })}
      </div>

      {/* Sidebar */}
      <div className="season-sidebar">
                  {/* Location Switcher (moved from parent) */}
          {Array.isArray(locations) && locations.length > 1 && (
            <div className="location-switcher">
              {locations.map((loc) => (
                <button
                  key={loc._id}
                  className={`location-btn ${location?._id === loc._id ? 'active-btn' : ''}`}

                  onClick={() => {
                    setActiveLocation(loc);
                    window.location.hash = loc.slug?.current;
                  }}
                >
                  {loc.title}
                </button>
              ))}
            </div>
          )}
        <div className="pageSideMain">
          {pageSideText.length > 0 && (
            <div className="side-text">
              <PortableText
                value={pageSideText}
                components={{
                  types: {
                    ctaButton: ({ value }) => (
                      <CTAButton
                        value={{
                          buttonLabel: value.buttonLabel,
                          buttonUrl: value.buttonUrl,
                          openInNewWindow: value.openInNewWindow,
                          buttonColor: value.buttonColor,
                          buttonAlignment: value.buttonAlignment,
                        }}
                      />
                    ),
                  },
                }}
              />
            </div>
          )}

          {googleMapsLink && (
            <div
              className="sidebar-map"
              dangerouslySetInnerHTML={{ __html: googleMapsLink }}
            />
          )}
        </div>

        {poster?.asset?.url && (
          <div className="sidebar-poster">
            <img src={poster.asset.url} alt={poster.alt || ""} />
            {poster.alt && <p className="poster-caption">{poster.alt}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
