'use client';
import { useEffect, useRef } from 'react';

export default function CanadaHelpsEmbed({ value }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clean up any previously injected scripts
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.id = 'ch_cdn_embed';
    script.type = 'text/javascript';
    script.src = value.scriptSrc;
    script.charset = 'utf-8';
    script.setAttribute('data-language', value.language || 'en');
    script.setAttribute('data-page-id', value.pageId);
    script.setAttribute('data-root-url', value.rootUrl);
    script.setAttribute('data-formtype', value.formType || '0');

    if (value.async === false) {
      script.setAttribute('data-cfasync', 'false');
    }

    containerRef.current.appendChild(script);

    return () => {
      containerRef.current.innerHTML = '';
    };
  }, [value]);

  return (
    <div className="canadahelps-embed-wrapper">
      <div ref={containerRef} />
    </div>
  );
}
