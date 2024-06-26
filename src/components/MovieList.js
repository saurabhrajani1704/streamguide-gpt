import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
    console.log(movies);

  return (
    <div className='px-6' style={{backgroundColor: 'black'}}>
      <h1 className='text-3xl py-4 mb-4 text-white font-bold'>{title}</h1>
      <div className='flex overflow-x-clip'>
        <div className='flex'>
          {movies && movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList;