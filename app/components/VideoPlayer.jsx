"use client"
import React from 'react'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function VideoPlayer({ value }) {
  console.log(value);
  return (
    <ReactPlayer url={value.url} />
  );
}
