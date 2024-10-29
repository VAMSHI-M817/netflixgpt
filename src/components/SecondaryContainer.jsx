import { useSelector } from "react-redux"
import MovieList from "./MovieList";


const SecondaryContainer = () => {
    const Movies = useSelector(store => store.movies)



    return (
        Movies.nowPlayingMovies && (
            <div className="bg-black">
                <div className=" mt-0 md:-mt-36 pl-4 md:pl-12 relative z-20">
                    <MovieList title={"Now Playing"} movies={Movies.nowPlayingMovies} />
                    <MovieList title={"Top Rated"} movies={Movies.topRatedMovies} />
                    <MovieList title={"Popular"} movies={Movies.popularMovies} />
                    <MovieList
                        title={"Upcoming Movies"}
                        movies={Movies.upcomingMovies}
                    />
                    <MovieList title={"Horror"} movies={Movies.nowPlayingMovies} />
                </div>
            </div>

        )
    )
}

export default SecondaryContainer
