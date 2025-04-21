'use client';
import { useState } from 'react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section data-type="accordion">
      <div className="w-full space-y-4 my-8">
        {items?.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              className="w-full flex justify-between items-center p-4 text-left"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-medium">{item.heading}</span>
              <span className="transform transition-transform duration-200">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 pt-0">
                <p className="text-gray-600">{item.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
