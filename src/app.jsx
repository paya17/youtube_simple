import React, { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

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


  return <VideoList videos={videos} />; {/*props 이용해서, VideoList컴포넌트에서 이 데이터 사용하기*/}
}

export default App;
