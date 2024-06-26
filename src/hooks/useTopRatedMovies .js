
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

//Fetch data from tmdb api and dispatch it to the store
const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=5', API_OPTIONS)
    const json=await data.json();
    console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
    };

    useEffect(()=>{
    getTopRatedMovies();
    },[]);
};

export default useTopRatedMovies;
