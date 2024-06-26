import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTrendingTVshows} from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

//Fetch data from tmdb api and dispatch it to the store
const useTrendingTVshows = () => {
    const dispatch = useDispatch();
    const getTrendingTVshows = async () => {
    const data=await fetch('https://api.themoviedb.org/3/trending/tv/day', API_OPTIONS)
    const json=await data.json();
    console.log(json.results);
    dispatch(addTrendingTVshows(json.results));
    };

    useEffect(()=>{
    getTrendingTVshows();
    },[]);
};

export default useTrendingTVshows;