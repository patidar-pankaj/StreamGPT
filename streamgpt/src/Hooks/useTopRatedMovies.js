import { useDispatch } from "react-redux";
import { Api_Options } from "../Utils/Constants"
import { addtopRatedMovies } from "../Utils/MovieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",Api_Options);
        const json = await data.json();
        // console.log(json);
    
        dispatch(addtopRatedMovies(json.results));
    };

    useEffect(()=>{
        getTopRatedMovies();
    },[]);


};

export default useTopRatedMovies;