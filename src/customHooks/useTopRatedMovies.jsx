import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../utils/MovieSlice"
import { API_OPTIONS, TOP_RATED_MOVIES_API } from "../utils/Constants"


const useTopRatedMovies = () => {
    const dispatch = useDispatch()

    const getTopRatedMovies = async () => {
        const response = await fetch(TOP_RATED_MOVIES_API, API_OPTIONS)
        const data = await response.json()
        dispatch(addTopRatedMovies(data?.results))
    }

    useEffect(() => {
        getTopRatedMovies()
    }, [])

}
export default useTopRatedMovies;
