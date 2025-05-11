'use client';

import { useEffect, useState } from 'react';
import { componentMap } from '@/app/components/ComponentMap';
import LocationDisplay from '@/app/components/LocationDisplay';

export default function SeasonClient({ season }) {
  const locations = Array.isArray(season.seasonsLocations) ? season.seasonsLocations : [];
  const [activeLocation, setActiveLocation] = useState(locations[0] || null);

  useEffect(() => {
    const hash = window.location.hash?.replace('#', '');
    if (hash && locations.length > 0) {
      const found = locations.find((loc) => loc.slug?.current === hash);
      if (found) {
        setActiveLocation(found);
      }
    }
  }, [locations]);

  const handleLocationClick = (loc) => {
    setActiveLocation(loc);
    window.location.hash = loc.slug?.current;
  };

  return (
    <div className="season-page-container">
      {/* Top blocks */}
      {season.pageBlocksTop?.map((block) => {
        const BlockComponent = componentMap[block._type];
        return BlockComponent ? (
          <BlockComponent key={block._key} value={block} />
        ) : null;
      })}

      {/* Location Switcher */}
      {locations.length > 1 && (
        <div className="location-switcher">
          {locations.map((loc) => (
            <button
              key={loc._id}
              className={`location-btn ${
                activeLocation?._id === loc._id ? 'active' : ''
              }`}
              onClick={() => handleLocationClick(loc)}
            >
              {loc.title}
            </button>
          ))}
        </div>
      )}

      <LocationDisplay
        season={season}
        location={activeLocation}
        componentMap={componentMap}
      />
    </div>
  );
}
