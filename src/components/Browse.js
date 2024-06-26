import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import SecondaryContainer from './SecondaryContainer';
import VideoContainer from './VideoContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies ';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTrendingTVshows from '../hooks/useTrendingTVshows';



const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingTVshows();

  return (
    <div>
      <Header/>
      <VideoContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse;
