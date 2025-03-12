import { Bg_img } from "../Utils/Constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";


const SearchGPT = () => {

    return(
        <div>
            <div className="-z-10 fixed opacity-80">
                <img className="h-screen object-cover md:w-screen" src={Bg_img} alt="BG-Image"></img>
            </div>
            <div>
                <GptSearchBar />
                <GptMovieSuggestion />
            </div>
        </div>
    )
};

export default SearchGPT;