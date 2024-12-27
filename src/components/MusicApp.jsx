
import Header from './Header';
import Albums from './Albums';
import Player from './Player';
import { useState } from 'react';
import { albums } from '../data/songsData';

const MusicApp = ({onHandleDark,mode}) => {

  // use state to handle the curren song & playing the song
  let [currentsong,setCurrentsong]=useState(albums[0].songs[0].src)
  let [currentImg,setCurrentImg]=useState(albums[0].songs[0].src)


  let [isPlaying,setIsPlaying]=useState(false)
 
  return (
    <div >
      {/* Header-section start */}
      <Header onHandleDark={onHandleDark} mode={mode} />
      {/* Header-section end */}
      
      {/* Albums start */}
      <Albums setCurrentsong={setCurrentsong} setIsPlaying={setIsPlaying} currentImg={currentImg} setCurrentImg={setCurrentImg} />
      {/* Albums end */}
      
      {/* Player start */}
      <Player 
      currentsong={currentsong}
      setCurrentsong={setCurrentsong}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      />
      {/* Player end */}
    </div>
  );
};

export default MusicApp;
