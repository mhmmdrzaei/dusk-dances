'use client';
import React from 'react';
import ReactPlayer from 'react-player';

export default function VideoPlayer({ link }) {
  return (
    <section data-type="video">
      <ReactPlayer url={link} />
    </section>
  );
}
