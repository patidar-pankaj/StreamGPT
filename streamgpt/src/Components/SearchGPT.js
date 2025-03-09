import { Bg_img } from "../Utils/Constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";


const SearchGPT = () => {

    return(
        <div>
            <div className="-z-10 fixed opacity-80">
                <img src={Bg_img} alt="BG-Image"></img>
            </div>
          <GptSearchBar />
          <GptMovieSuggestion />
        </div>
    )
};

export default SearchGPT;