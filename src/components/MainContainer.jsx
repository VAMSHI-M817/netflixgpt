import React from 'react'
import { useSelector } from 'react-redux'
import Title from './Title';
import BackgroundVideo from './BackgroundVideo';

const MainContainer = () => {

    const Movies = useSelector((store) => store?.movies?.nowPlayingMovies)
    if (!Movies) return;

    const Movie = Movies[0]
    const { original_title, overview, id } = Movie

    return (
        <div className=''>
            <Title title={original_title} overview={overview} />
            <BackgroundVideo movieId={id} />
        </div>
    )
}

export default MainContainer
