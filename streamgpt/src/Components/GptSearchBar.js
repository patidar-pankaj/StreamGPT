import { useRef } from "react";
import openAI from "../Utils/openAI";
import { Api_Options } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addGptMovies, addMovieNames } from "../Utils/GptSlice";


const GptSearchBar = () => {

    const dispatch = useDispatch();
    const searchInput = useRef(null);

    const getMovies = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", Api_Options);

        const json = await data.json();
        return json.results;
    };

    const handleSearch = async () => {

        const query = "Act as a movie recommendation system and suggest some movies for the query : " + searchInput.current.value + ". only give me 5 movie names, separated by comma.Example Result : 'Don','Krrish','Golmaal','Thursday','Pushpa'";

        // console.log(searchInput.current.value);
        const gptResults = await openAI.chat.completions.create({
            model: "gpt-3.5-turbo", store: true,messages: [
        {"role": "user", "content": query}]
          });

        //   console.log(gptResults.choices?.[0]?.message?.content);
        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")
        // console.log(gptMovies);

        const PromiseArray = gptMovies.map((movie) => getMovies(movie));
        // [Promise,Promise,Promise,Promise,Promise]

        const recommendedMovies = await Promise.all(PromiseArray);
        console.log(recommendedMovies);

        dispatch(addGptMovies(recommendedMovies));
        dispatch(addMovieNames(gptMovies));
    }

    return (
        <div className="flex justify-center pt-[10%]">
            <form className=" bg-black w-1/2 grid grid-cols-12 rounded-lg" onSubmit={(e) => e.preventDefault()}>
                <input ref={searchInput} type="text" placeholder="what would you like to watch today ?" className="m-4 p-4 col-span-9 rounded-lg"></input>
                <button onClick={handleSearch} className="bg-red-700 text-white rounded-lg px-3 col-span-3 m-4">Search</button>

            </form>
        </div>
    )
};

export default GptSearchBar;