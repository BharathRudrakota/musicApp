import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = ({currentsong,setCurrentsong,isPlaying,setIsPlaying}) => {
  console.log(currentsong)
  return (
    <div className="player mt-2 container p-4 shadow border border-danger rounded position-fixed">
      <h4>{currentsong}</h4>
         <AudioPlayer
         className='audio-player'
    autoPlay={isPlaying}
    src={currentsong}
    onPlay={e => setIsPlaying(true)}
    onPause={e => setIsPlaying(false)}
  />
    </div>
  )
}

export default Player