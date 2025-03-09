import {createSlice} from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "movie",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo :null,
        popularMovies : null,
        topRatedMovies:null,
        upcomingMovies:null
    },
    reducers : {
        addMovies : (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state,action) => {
            state.popularMovies = action.payload;
        },
        addtopRatedMovies : (state,action) => {
            state.topRatedMovies = action.payload;
        },
        addupcomingMovies : (state,action) => {
            state.upcomingMovies = action.payload;
        },
        addTrailer : (state,action) => {
            state.trailerVideo = action.payload;
        }
    }
});

export const {addMovies, addTrailer, addPopularMovies, addtopRatedMovies, addupcomingMovies} = MovieSlice.actions;
export default MovieSlice.reducer;