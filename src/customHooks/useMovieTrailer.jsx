import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../utils/MovieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/Constants"




const MovieTrailer = (movieId) => {
    const dispatch = useDispatch()

    const Video = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS)
        const data = await response.json()

        const filterData = data?.results?.filter((movie) => movie?.type === "Trailer");
        const trailer = filterData.length > 0 ? filterData[0]?.key : data?.results[0]?.key
        dispatch(addTrailerVideo(trailer))
        
    }

    useEffect(() => {
        Video()
    }, [])
}

export default MovieTrailer