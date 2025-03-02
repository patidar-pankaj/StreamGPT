import { useEffect } from "react";
import { Api_Options } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addMovies } from "../Utils/MovieSlice";

const useNowPlayingMovies = () => {
     // Get now playing movies from TMDB Api and store it in the redux store
     const dispatch = useDispatch();
     const getNowPlaying = async () => {
         const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",Api_Options)
         const json = await data.json();
         console.log(json.results);
         dispatch(addMovies(json.results));
     };
 
     useEffect(() => {
         getNowPlaying();
     },[]);
};

export default useNowPlayingMovies;