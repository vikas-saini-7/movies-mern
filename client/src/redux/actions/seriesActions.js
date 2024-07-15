import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const API_KEY = '03b6ee421e966831a5e3d3ff0d65eede';
const BASE_URL = 'https://api.themoviedb.org';

export const getAllSeries = createAsyncThunk('series', async (_, thunkAPI) => {
    try {
        const today = new Date().toISOString().split('T')[0];
        const response = await axios.get(`${BASE_URL}/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=first_air_date.desc&first_air_date.lte=${today}&page=1`);
        console.log(response.data.results);
        return response.data.results;
    } catch (error) {
        console.log("error in getAllSeries:", error.message);
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const getPopularSeries = createAsyncThunk('series/popular', async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${BASE_URL}/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`);
        console.log(response.data.results);
        return response.data.results;
    } catch (error) {
        console.log("error in getPopularSeries:", error.message);
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const getTopRatedSeries = createAsyncThunk('series/topRated', async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${BASE_URL}/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
        console.log(response.data.results);
        return response.data.results;
    } catch (error) {
        console.log("error in getTopRatedSeries:", error.message);
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const getUpcomingSeries = createAsyncThunk('series/upcoming', async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${BASE_URL}/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`);
        console.log(response.data.results);
        return response.data.results;
    } catch (error) {
        console.log("error in getUpcomingSeries:", error.message);
        return thunkAPI.rejectWithValue(error.message);
    }
});
