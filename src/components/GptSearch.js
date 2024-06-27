import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BACKGROUND_IMG_URLS } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
        <img src={BACKGROUND_IMG_URLS} alt='login'></img>
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>

  )
}

export default GptSearch;