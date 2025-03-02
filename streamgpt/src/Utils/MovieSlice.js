import {createSlice} from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "movie",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo :null
    },
    reducers : {
        addMovies : (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailer : (state,action) => {
            state.trailerVideo = action.payload;
        }
    }
});

export const {addMovies, addTrailer} = MovieSlice.actions;
export default MovieSlice.reducer;