
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

//Fetch data from tmdb api and dispatch it to the store
const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=4', API_OPTIONS)
    const json=await data.json();
    console.log(json.results);
    dispatch(addPopularMovies(json.results));
    };

    useEffect(()=>{
    getPopularMovies();
    },[]);
};

export default usePopularMovies;
