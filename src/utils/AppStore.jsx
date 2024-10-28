import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/UserSlice"
import moviesReducer from "../utils/MovieSlice"



const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer
    }
})

export default appStore