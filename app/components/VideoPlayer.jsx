"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import './Blocks.scss'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function VideoPlayer({ value }) {
  console.log(value);
  return (
    <div className="videoPlayer">
          <ReactPlayer url={value.url} width="100%"
        height="100%"/>

    </div>

  );
}
