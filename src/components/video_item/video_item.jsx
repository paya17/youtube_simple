import React from 'react';

const VideoItem = props => <h1>{props.video.snippet.title}</h1>; //'props'를 인자로 받아서, return (화살표 함수)

export default VideoItem;
