import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addUpcomingMovies } from "../utils/MovieSlice"
import { API_OPTIONS, UPCOMING_MOVIES_API } from "../utils/Constants"


const useUpcomingMovies = () => {
    const dispatch = useDispatch()

    const getUpcomingMovies = async () => {
        const response = await fetch(UPCOMING_MOVIES_API, API_OPTIONS)
        const data = await response.json()
        dispatch(addUpcomingMovies(data?.results))
    }

    useEffect(() => {
        getUpcomingMovies()
    }, [])

}
export default useUpcomingMovies;