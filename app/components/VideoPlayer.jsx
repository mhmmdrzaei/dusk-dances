import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoPlayer({ link }) {
  return (
<ReactPlayer url={link} />
  );
}
