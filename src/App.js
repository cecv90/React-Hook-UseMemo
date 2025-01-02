import {  useState, useRef } from 'react'
import './index.css';

const VideoPlayer =() => {
  const [playing, setPlaying] = useState(false)
  const ref = useRef(null)

  const handleClick = () => {
    const nextIsPlaying = !playing
    setPlaying(nextIsPlaying)
    
    if(nextIsPlaying){
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }
  
  return (
    <>
      <button onClick={handleClick}>
        {playing ? 'Pause' : 'Play'}
      </button>
      <video
        width='250'
        ref={ref}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        > 
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}

export default VideoPlayer;
