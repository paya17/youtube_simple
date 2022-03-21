import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css'; //import


const VideoList = props => (
  <ul className={styles.videos}>
    {props.videos.map(video => (
      <VideoItem key={video.id} video={video} /> 
    ))} {/*props 이용해서, VideoItem컴포넌트에서 이 데이터 사용하기*/}
  </ul>
); //props를 인자로 받아서, return! (화살표 함수)

export default VideoList;
