import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addPopularMovies } from "../utils/MovieSlice"
import { API_OPTIONS, POPULAR_MOVIES_API } from "../utils/Constants"


const usePopularMovies = () => {
    const dispatch = useDispatch()

    const getNowPopularMovies = async () => {
        const response = await fetch(POPULAR_MOVIES_API, API_OPTIONS)
        const data = await response.json()
        dispatch(addPopularMovies(data?.results))
    }

    useEffect(() => {
        getNowPopularMovies()
    }, [])

}
export default usePopularMovies;
