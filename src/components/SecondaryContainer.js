import React from 'react'
import MovieList from './MovieList';
import useNowPlayingMovies from '../hooks/usePopularMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies);
  console.log(movies.popularMovies)
  return (
    <div className=' bg-black'>
    <div className=' -mt-48 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated Movies"} movies={movies.TopRatedMovies} />
      <MovieList title={"Popular"} movies={movies.PopularMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies} />
      <MovieList title={"Trending TV Shows"} movies={movies.TrendingTVshows} />
    </div>
      
    </div>
  )
}

export default SecondaryContainer;