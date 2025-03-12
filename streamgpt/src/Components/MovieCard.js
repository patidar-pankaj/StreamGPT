import { CDN_IMG } from "../Utils/Constants";


const MovieCard = ({posterPath}) => {

    if(!posterPath) return null;
    return (
        <div className="w-36 md:w-48 mr-5">
            <img src={CDN_IMG+posterPath} alt="movie poster"/>
        </div>
    )
};

export default MovieCard;