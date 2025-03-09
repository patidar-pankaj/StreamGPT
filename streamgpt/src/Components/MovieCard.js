import { CDN_IMG } from "../Utils/Constants";


const MovieCard = ({posterPath}) => {
    return (
        <div className="w-48 mr-5">
            <img src={CDN_IMG+posterPath} alt="movie poster"/>
        </div>
    )
};

export default MovieCard;