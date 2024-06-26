import React from 'react'
import { POSTER_URLS } from '../utils/constants';

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4 '>
      <img alt='movie card' src={POSTER_URLS+posterPath}></img>
    </div>
  )
}

export default MovieCard;