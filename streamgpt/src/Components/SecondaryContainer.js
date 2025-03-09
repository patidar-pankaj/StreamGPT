import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

    const movies = useSelector( store => store.movie);
    // console.log(movies);
    return (
        <div className="bg-black">
            <div className="-mt-72 relative z-10">
                <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Popular"} movies={movies.popularMovies} />
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
            </div>
        </div>
    )
};

export default SecondaryContainer;