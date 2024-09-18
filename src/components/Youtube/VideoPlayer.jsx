// src/components/VideoPlayer.js
import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId, listView }) => {
  const opts = {
    height: listView? '195' :'390',
    width: listView? '320' :'640',
    playerVars: {
      autoplay: listView? 0 :  1,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />
};

export default VideoPlayer;
