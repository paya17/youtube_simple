import React, { useEffect, useState } from 'react';
import styles from './app.module.css'; //import(css앞에 module?!)
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header'; //import


function App() {

  const [videos, setVideos] = useState([]);

  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyDuMJnQ133myb8xvUmQGeef18owiMREc6M`, 
      requestOptions
    )
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item , id: item.id.videoId}))) //map()을 이용해 '새로운 배열'을 만드는데, id: item.id.videoId인 배열 만들기
      .then(items => setVideos(items)) //state를 업데이트
      .catch(error => console.log('error', error));
  } //Postman에서, 리소스 받아오는 코드 가져오기


  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDuMJnQ133myb8xvUmQGeef18owiMREc6M',
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items)) //state를 업데이트
      .catch(error => console.log('error', error));
  }, []); //Postman에서, 리소스 받아오는 코드 가져오기



  return ( //return!!
    <div className={styles.app}>
      <SearchHeader onSearch={search} /> {/*props 이용해서, SearchHeader컴포넌트에서 이 데이터 사용하기*/}
      <VideoList videos={videos} />; {/*props 이용해서, VideoList컴포넌트에서 이 데이터 사용하기*/}
    </div> //나열하려면 묶어야됨
  );
}

export default App;
