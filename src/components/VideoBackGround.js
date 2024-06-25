import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackGround = ({movieId}) => {

    const trailerVideos = useSelector((store) =>store.movies?.trailerVideos); 
     
    useMovieTrailer(movieId);


return (
    <div>
            <iframe
                    className='w-screen aspect-video' 
                    src={"https://www.youtube-nocookie.com/embed/" + trailerVideos?.key + "?autoplay=1&mute=1"} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
            </iframe>
    </div>
)
}

export default VideoBackGround;