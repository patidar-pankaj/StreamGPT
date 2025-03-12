import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import SearchGPT from "./SearchGPT";
import { useSelector } from "react-redux";


const Browse = () => {
   
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    const isSearchComp = useSelector((store) => store.gpt.toggleSearch);

    return (
        <div className="w-screen overflow-hidden">
        <Header />
        {isSearchComp ? <SearchGPT /> : 
        (<>
        <MainContainer />
        <SecondaryContainer />
        </>)
        }
        
        
        </div>

    )
};

export default Browse;