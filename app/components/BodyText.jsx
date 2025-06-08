"use client";
import { PortableText } from "@portabletext/react";
import CTAButton from "@/app/components/CTAButtonBox";
import ImageCustom from "./Image"; // Assuming ImageCustom component is imported
import VideoPlayer from "./VideoPlayer"; // Assuming VideoPlayer component is imported

export default function BodyText({ value }) {
  const { width = "100", content, background, scrollingTag } = value;

  return (
    <div id={scrollingTag? scrollingTag : ''} className={`body-text-container ${background == "white"? "white-bg-text" : background == "green"? "green-bg-text": "pink-bg-text"} ${width === '49'? 'half-width': ''}`} >
      {/* Render text content using PortableText */}
      {content && (
        <div className="text-content" style={{ padding: "20px" }}>
          {/* Filter and render block content */}
          <PortableText
                value={content.filter((item) => item._type === "block")}
              />


        {content
          .filter((item) => item._type === "ctaButton")
          .map((cta, index) => (
            <CTAButton
              key={index}
              value={{
                buttonLabel: cta.buttonLabel,
                buttonUrl: cta.buttonUrl,
                openInNewWindow: cta.openInNewWindow,
                buttonColor: cta.buttonColor,
                buttonAlignment: cta.buttonAlignment
              }}
            />
          ))}
          {content
            .filter((item) => item._type === "imageCustom")
            .map((image, index) => {
              const { image: img, alt, caption, width } = image;
              return (
                <ImageCustom
                  key={index}
                  value={{
                    image: img,
                    alt: alt || "Image", // Use fallback if alt is null
                    caption: caption || "", // Use fallback if caption is null
                    width: width || "full", // Use fallback if width is null
                  }}
                />
              );
            })}



          {/* Render Videos */}
          {content
            .filter((item) => item._type === "video")
            .map((video, index) => (
              <VideoPlayer key={index} link={video.url} />
            ))}
        </div>
      )}
    </div>
  );
}
