import { createSlice } from "@reduxjs/toolkit";
import { getAllMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "../actions/movieActions";

const initialState = {
    all: [],
    popular: [],
    topRated: [],
    upcoming: [],
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

        // all movies 
        .addCase(getAllMovies.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getAllMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.all = action.payload
        })
        .addCase(getAllMovies.rejected, (state, action) => {
            state.loading = false;
        })

        // popular movies 
        .addCase(getPopularMovies.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getPopularMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.popular = action.payload
        })
        .addCase(getPopularMovies.rejected, (state, action) => {
            state.loading = false;
        })

        // top_rated movies 
        .addCase(getTopRatedMovies.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getTopRatedMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.topRated = action.payload
        })
        .addCase(getTopRatedMovies.rejected, (state, action) => {
            state.loading = false;
        })

        // upcoming movies 
        .addCase(getUpcomingMovies.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getUpcomingMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.upcoming = action.payload
        })
        .addCase(getUpcomingMovies.rejected, (state, action) => {
            state.loading = false;
        })
    }
})

export default movieSlice.reducer