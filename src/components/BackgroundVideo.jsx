import { useSelector } from "react-redux"
import useMovieTrailer from "../customHooks/useMovieTrailer"

const BackgroundVideo = ({ movieId }) => {
    useMovieTrailer(movieId)
    const trailerId = useSelector(store => store?.movies?.trailerVideo)


    return (
        <div>
            <iframe
                className="w-screen aspect-video"
                src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&modestbranding=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                frameBorder="0"
            ></iframe>

        </div >
    )
}

export default BackgroundVideo;
