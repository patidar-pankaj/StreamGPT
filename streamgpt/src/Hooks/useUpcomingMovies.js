import { useDispatch } from "react-redux";
import { Api_Options } from "../Utils/Constants"
import { addupcomingMovies } from "../Utils/MovieSlice";
import { useEffect } from "react";


const useUpcomingMovies = () => {

    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",Api_Options);
        const json = await data.json();
        // console.log(json);
    
        dispatch(addupcomingMovies(json.results));
    };

    useEffect(()=>{
        getUpcomingMovies();
    },[]);
};

export default useUpcomingMovies;