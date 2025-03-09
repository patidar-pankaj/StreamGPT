import { useDispatch } from "react-redux";
import { Api_Options } from "../Utils/Constants"
import { addPopularMovies } from "../Utils/MovieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {

    const dispatch = useDispatch();

    const getPoupularMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",Api_Options);
        const json = await data.json();
        // console.log(json);
    
        dispatch(addPopularMovies(json.results));
    };

    useEffect(()=>{
        getPoupularMovies();
    },[]);


};

export default usePopularMovies;