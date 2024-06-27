import { createSlice } from "@reduxjs/toolkit";

const gptSlice= createSlice({
    name: "gpt",
    initialState: {
        showGptSearch:false,
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addSearchMovies: (state, action) => {
            state.searchMovies = action.payload;
        },
    },
});

export const { toggleGptSearchView,addSearchMovies} = gptSlice.actions;
export default gptSlice.reducer;