'use client';
import { useState } from 'react';

export default function Input({ title, label, ctaText, onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(inputValue);
    }
    setInputValue('');
  };

  return (
    <div className="w-full max-w-md text-white">
      {title && <h3 className="font-semibold text-lg mb-2">{title}</h3>}
      <form onSubmit={handleSubmit} className="flex items-end gap-1">
        <div className="flex-1">
          <label className="sr-only text-xs">{label}</label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={label}
            className="w-full px-0 py-2 bg-transparent border-b-2 border-white 
              text-white text-xs placeholder-white focus:outline-none focus:border-b-white 
              transition-colors"
            aria-label={label}
          />
        </div>

        <button
          type="submit"
          className="px-4 py-1.5 bg-yellow-400 text-black rounded-md hover:bg-yellow-600 
            transition-colors font-medium whitespace-nowrap"
        >
          {ctaText}
        </button>
      </form>
    </div>
  );
}
