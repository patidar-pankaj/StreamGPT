import React from 'react';
import { useSelector } from 'react-redux';
import VideoBG from './VideoBG';
import VideoTitle from './VideoTitle';

const MainContainer = () => {

    const movies = useSelector((store)=> store.movie.nowPlayingMovies);
    if (!movies) return;


    const {original_title,overview,id} = movies[1];
    // console.log(movies[1]);


    return (
        <div className='pt-[35%] md:pt-0 bg-black'>
            <VideoTitle title = {original_title} overview={overview} />
            <VideoBG movieId = {id}/>
        </div>
    );
};

export default MainContainer;