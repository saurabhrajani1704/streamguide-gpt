import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

//Fetch data from tmdb api and dispatch it to the store
const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=2', API_OPTIONS)
    const json=await data.json();
    console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
    };

    useEffect(()=>{
    getUpcomingMovies();
    },[]);
};

export default useUpcomingMovies;
