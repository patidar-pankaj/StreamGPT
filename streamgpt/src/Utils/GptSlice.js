import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "gpt",
    initialState:{
        toggleSearch : false,
        gptMovies : null,
        movieNames : null
    },
    reducers : {
        triggerToggleSearch : (state, action) =>{
            state.toggleSearch = !state.toggleSearch;
        },
        addGptMovies : (state, action) =>{
            state.gptMovies = action.payload;
        },
        addMovieNames : (state, action) =>{
            state.movieNames = action.payload;
        }
    }
});

export const {triggerToggleSearch, addGptMovies, addMovieNames} = GptSlice.actions;
export default GptSlice.reducer;