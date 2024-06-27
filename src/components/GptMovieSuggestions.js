import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';


const GptMovieSuggestions = () => {
  const movies = useSelector(store=>store.gpt);
  return (
        <div>
          <div className=' mt-16 relative z-20'>
            <MovieList title={"Search Results"} movies={movies.searchMovies} />
          </div>
      
    </div>
  )
}

export default GptMovieSuggestions;