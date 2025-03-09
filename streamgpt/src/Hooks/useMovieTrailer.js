import { useDispatch, useSelector } from "react-redux";
import { Api_Options } from "../Utils/Constants";
import { addTrailer } from "../Utils/MovieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {

    //Get Movie trailer and store in redux store
    const dispatch = useDispatch();

    const trailerVideo = useSelector((store) => store.movie.trailerVideo);

    const getMovieTrailer = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",Api_Options);
        const json = await data.json();
        console.log(json);

        const filteredTrailers = json.results.filter((video) => video.type === "Trailer");
        const trailer = filteredTrailers.length ? filteredTrailers[0] : json.results[0];
        console.log(trailer);   
        dispatch(addTrailer(trailer));

    }

    useEffect(()=>{

       if(!trailerVideo) getMovieTrailer(); //memoization
    },[])
};

export default useMovieTrailer;