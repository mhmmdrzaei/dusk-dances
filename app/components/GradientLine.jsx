'use client';

import React from 'react';

const GradientLine = ({ lineColor, align }) => {
  // Set the alignment styles
  const alignStyles = align === 'right' ? { marginLeft: 'auto', marginRight: 0 } : {};

  // Set the gradient color based on the selected lineColor
  const gradientColors = {
    black: 'linear-gradient(to right, #000, #555)',
    red: 'linear-gradient(to right, #f00, #ff7f7f)',
  };

  // Set the gradient color based on the lineColor value
  const gradientStyle = {
    background: gradientColors[lineColor] || gradientColors.black,
    height: '4px',
    width: '100%',
    ...alignStyles, // Apply the alignment styles
  };

  return <div style={gradientStyle}></div>;
};

export default GradientLine;
