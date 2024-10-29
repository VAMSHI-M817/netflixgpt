import React, { useRef } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' }); // Adjust the scroll distance as needed
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' }); // Adjust the scroll distance as needed
        }
    };

    return (
        <div className="px-6 max-sm:text-center">
            <h1 className="text-lg md:text-2xl py-4 text-white font-bold">{title}</h1>
            <div className="flex items-center gap-2">
                <button onClick={scrollLeft} className="absolute border border-double hover:text-black hover:bg-white bg-black text-white rounded p-2 max-sm:border-none">
                    ◄
                </button>

                <div ref={scrollRef} className="flex overflow-x-scroll scroll-smooth scrollbar-hidden">
                    <div className="flex">
                        {movies?.map((movie) => (
                            <MovieCard key={movie.id} posterPath={movie.poster_path} />
                        ))}
                    </div>
                </div>

                <button onClick={scrollRight} className="border border-double hover:text-black hover:bg-white bg-black text-white rounded p-2 max-sm:border-none">
                    ►
                </button>
            </div>
        </div>
    );
}

export default MovieList
