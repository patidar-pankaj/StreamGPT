import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const GptMovieSuggestion = () =>{

    const {movieNames, gptMovies} = useSelector((store) => store.gpt);
    console.log(movieNames,gptMovies);

    return (
        <>
        {movieNames && (
            <div className="m-4 p-4 bg-black text-white ">
            <div>
            {movieNames?.map((movieName,index) => (
                <MovieList key={movieName} title={movieName} movies={gptMovies[index]}/>)
            )}
            </div>
            
        </div>
        )}
        </>
        
    )
};

export default GptMovieSuggestion;