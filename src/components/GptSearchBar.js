import React, { useRef,useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addSearchMovies } from '../utils/gptSlice.js';

const GptSearchBar = () => {
        const dispatch = useDispatch();

const searchText=useRef(null);
        const SearchTMDB = async () => {
                const movie=searchText.current.value;
                const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS);
                const json=await data.json();
                console.log('Abc')
                console.log(json.results);
                dispatch(addSearchMovies(json.results));
        };
          


return (
       
    <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 bg-black  grid grid-cols-12 p-2' onSubmit={(e)=>e.preventDefault()}>
                    <input ref={searchText} className='border border-gray-300 rounded-md p-4  m-4 col-span-10 focus:outline-none focus:ring-2 focus:ring-blue-500' type='text' placeholder='Whats on your Mind Today?'/>
                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-4 rounded col-span-2' type='submit' onClick={SearchTMDB}>Search</button>
            </form>
    </div>
)
}

export default GptSearchBar;