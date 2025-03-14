import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";


const VideoBG = ({movieId}) => {

    useMovieTrailer(movieId);
    const trailer = useSelector((store) => store.movie.trailerVideo);

    
    return (
        <div className="w-screen">
            <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+ trailer?.key+"?si=L8X-Kb5dZp1Fr7wy&autoplay=1&mute=1&controls=0" }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    )
};

export default VideoBG;