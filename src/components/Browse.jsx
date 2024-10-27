import { data } from "autoprefixer"
import Header from "./Header"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/Constants"





const Browse = () => {

  const getNowPlayingMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
    const data = await response.json()
    console.log(data?.results);
  }




  useEffect(() => {
    getNowPlayingMovies()
  }, [])


  return (
    <div>
      <Header />
      This is the Browse component
    </div>
  )
}

export default Browse
