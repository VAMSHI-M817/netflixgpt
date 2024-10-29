import { MOVIE_CARD_IMG_API } from "../utils/Constants"



const MovieCard = ({ posterPath }) => {

  return (
    <>
      <div className="w-36 md:w-48 pr-4">
        <img alt="Movie Card" src={MOVIE_CARD_IMG_API + posterPath} />
      </div>
    </>
  )
}

export default MovieCard
