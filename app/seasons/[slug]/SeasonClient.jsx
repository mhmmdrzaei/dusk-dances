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

<LocationDisplay
  season={season}
  location={activeLocation}
  locations={locations}
  setActiveLocation={handleLocationClick}
  componentMap={componentMap}
/>
    </div>
  );
}
