import React, { useEffect } from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import SecondaryContainer from './SecondaryContainer';
import VideoContainer from './VideoContainer';



const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <VideoContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse;
