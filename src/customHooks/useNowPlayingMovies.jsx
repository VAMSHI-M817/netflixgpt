import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/MovieSlice"
import { API_OPTIONS, PLAYING_MOVIES_API } from "../utils/Constants"


const useNowPlayingMovies = () => {
    const [JsonData, setJsonData] = useState(null)

    const dispatch = useDispatch()

    const getNowPlayingMovies = async () => {
        const response = await fetch(PLAYING_MOVIES_API, API_OPTIONS)
        const data = await response.json()
        setJsonData(data?.results)
        dispatch(addNowPlayingMovies(data?.results))
    }

    useEffect(() => {
        getNowPlayingMovies()
    }, [])

    return JsonData
}
export default useNowPlayingMovies;
