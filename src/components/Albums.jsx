import React from 'react';
import { albums } from '../data/songsData';

const Albums = ({ setCurrentsong, setIsPlaying, currentImg,setCurrentImg}) => {
  return (
    <div className='albums my-3 container p-4 shadow border border-danger position-fixed'>
      {/* row - 1 */}
      <div className='row'>
        <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
          <div className="card shadow">
            <img src={currentImg} alt="Select a song below" className='banner-music-img shadow rounded' />
          </div>
        </div>
      </div>
      {/* row - 2 */}
      <div className="row pt-3">
        {
          albums.map((album, index) => (
            <div className="col-12 col-sm-12 col-md-3 col-lg-3" key={index}>
              <div className="card shadow album">
                <img
                  src={album.image}
                  onClick={() => {
                    setCurrentImg(album.songs[0].image)
                    setCurrentsong(album.songs[0].src);
                    setIsPlaying(true);
                  }}
                  alt=""
                  className='shadow rounded'
                />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Albums;
