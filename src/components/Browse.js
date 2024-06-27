import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import SecondaryContainer from './SecondaryContainer';
import VideoContainer from './VideoContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies ';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTrendingTVshows from '../hooks/useTrendingTVshows';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';



const Browse = () => {
  const showGptSearch= useSelector(store=>store.gpt.showGptSearch)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingTVshows();

  return (
    <div>
      <Header/>
      {showGptSearch ? (
        <GptSearch/>
      ) : (
        <>
          <VideoContainer/>
          <SecondaryContainer/>
        </>
        )
      }
    </div>
  )
}

export default Browse;
