"use client";
import { useState } from "react";
import { PortableText } from "@portabletext/react";
import CTAButton from "@/app/components/CTAButtonBox";
export default function AccordionText({ value }) {
  const { heading, subHeading, text, background } = value;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev); // Toggle the accordion open/close state
  };

  return (
    <div className={`accordion-text-container ${background}`}>
      <div className="accordion-header" onClick={handleToggle}>
        <button className="accordion-toggle-button">
          {isOpen ? "−" : "+"}
        </button>
        <div className="accordion-heading">
          <h3 className="heading">{heading}</h3>
          {subHeading && <h4 className="subheading">{subHeading}</h4>}
        </div>
      </div>

      {isOpen && (
        <div className="accordion-body">
          {/* Render text content using PortableText */}
          {text && (
            <div className="text-content" style={{ flex: 1, padding: "20px" }}>
              {/* Filter and render block content */}
              <PortableText
                value={text.filter((item) => item._type === "block")}
              />

              {/* Render CTA buttons */}
              {text
                .filter((item) => item._type === "ctaButton")
                .map((cta, index) => (
                  <CTAButton key={index} {...cta} />
                ))}

              {/* Render Images */}
              {text
                .filter((item) => item._type === "imageCustom")
                .map((image, index) => {
                  const { image: img, alt, caption } = image;
                  return (
                    <div key={index} className="image-container">
                      <img
                        src={img?.asset?.url || "/placeholder.jpg"} // Fallback to placeholder
                        alt={alt || "Image"}
                        className="image-custom"
                      />
                      {caption && <p>{caption}</p>}
                    </div>
                  );
                })}

              {/* Render Videos */}
              {text
                .filter((item) => item._type === "video")
                .map((video, index) => (
                  <div key={index} className="video-container">
                    <iframe
                      src={video?.url}
                      title="Video"
                      className="video-iframe"
                    />
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
