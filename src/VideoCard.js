import React, { useRef, useState } from 'react';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';
import './VideoCard.css';

function VideoCard({url,likes,shares, channel,avatarSrc, song}) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () =>{
    if(isVideoPlaying){
      videoRef.current.pause();
      setIsVideoPlaying(false)
    }else{
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className='videoCard'>
      <VideoHeader />
        <video
            ref={videoRef}
            onClick={onVideoPress}
            className='videoCard__player'
            src = {url}
            alt='IG reel video'
            loop
        />
        <VideoFooter
        channel = { "yuva_prashanth_dls" }
        avatarSrc = "https://instagram.flhr3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/22580466_127539667965809_8721119866930593792_n.jpg?_nc_ht=instagram.flhr3-1.fna.fbcdn.net&_nc_ohc=ZTK0LPtvi_AAX-sN1Ut&oh=f099992a06cb1f8d885893dce7b067bb&oe=5F6047C1"
        song = "Test song - ssssangha"
        url = "https://instagram.flhr3-2.fna.fbcdn.net/v/t50.2886-16/117598442_205338364335864_545695080903278566_n.mp4?_nc_ht=instagram.flhr3-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=vjDPPklLnOYAX-xOjlv&oe=5F38FACF&oh=fbe19a529394ac8cc1a61f1b2b016e54"
        likes = { 950 }
        shares = { 300 }
        />
    </div>
  )
}

export default VideoCard;
