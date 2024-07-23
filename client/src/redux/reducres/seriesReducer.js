import { createSlice } from "@reduxjs/toolkit";
import { getAllSeries, getPopularSeries, getTopRatedSeries, getUpcomingSeries } from "../actions/seriesActions";

const initialState = {
    all: [],
    popular: [],
    topRated: [],
    upcoming: [],
    loading: false,
    error: null
}

const seriesSlice = createSlice({
    name: 'series',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder

        // all series 
        .addCase(getAllSeries.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getAllSeries.fulfilled, (state, action) => {
            state.loading = false;
            state.all = action.payload
        })
        .addCase(getAllSeries.rejected, (state, action) => {
            state.loading = false;
        })

        // popular series 
        .addCase(getPopularSeries.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getPopularSeries.fulfilled, (state, action) => {
            state.loading = false;
            state.popular = action.payload
        })
        .addCase(getPopularSeries.rejected, (state, action) => {
            state.loading = false;
        })

        // top rated series 
        .addCase(getTopRatedSeries.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getTopRatedSeries.fulfilled, (state, action) => {
            state.loading = false;
            state.topRated = action.payload
        })
        .addCase(getTopRatedSeries.rejected, (state, action) => {
            state.loading = false;
        })

        // upcoming series 
        .addCase(getUpcomingSeries.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getUpcomingSeries.fulfilled, (state, action) => {
            state.loading = false;
            state.upcoming = action.payload
        })
        .addCase(getUpcomingSeries.rejected, (state, action) => {
            state.loading = false;
        })
    }
})

export default seriesSlice.reducer;
