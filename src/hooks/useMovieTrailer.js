import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTrailerVideos } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useMovieTrailer = (movieId) => {
    console.log(movieId);

    const dispatch = useDispatch();

    const getMovieVideos = async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)
        const json=await data.json();
        console.log(json);

        const filterTrailerVideos=json.results.filter(video=>video.type==="Trailer");
        const trailer=filterTrailerVideos.length ? filterTrailerVideos[0] : json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideos(trailer));

    };
    useEffect(()=>{
        getMovieVideos();
    },[]);
};

export default useMovieTrailer;
