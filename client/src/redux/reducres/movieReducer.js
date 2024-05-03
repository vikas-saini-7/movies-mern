import { createSlice } from "@reduxjs/toolkit";
import { Search } from "../actions/searchActions";

const initialState = {
    movies: [],
    loading: false,
    error: null
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(Search.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(Search.pending, (state, action) => {
            state.loading = false;
            state.movies = action.payload
        })
        .addCase(Search.pending, (state, action) => {
            state.loading = true;
            state.error = action.payload ? action.error : "Unknown error";
        })
    }
})

export default movieSlice.reducer