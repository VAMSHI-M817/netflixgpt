
const LOGO_URL = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

const BODYIMG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg"

const USERPROFILE_URL = "https://avatars.githubusercontent.com/u/149988360?v=4"

const PLAYING_MOVIES_API = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"

const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmRkNzMwYTgxMjU5YTdiNDVhOWQ1N2ZmMzZjZDNhMSIsIm5iZiI6MTczMDA1NzIxOS42OTI4NTIsInN1YiI6IjY3MWU5MDdhNWJlOWU4NzU5ZGE3OWUwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y0jig8GWrDmdYrcraUV8EZrwOO3pbdF7DdpeBbI6E7I'
    }
};




export {
    LOGO_URL,
    USERPROFILE_URL,
    BODYIMG_URL,
    API_OPTIONS,
    PLAYING_MOVIES_API
}