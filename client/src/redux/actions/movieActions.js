import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const API_KEY = '03b6ee421e966831a5e3d3ff0d65eede';
const BASE_URL = 'https://api.themoviedb.org';

export const getAllMovies = createAsyncThunk('movies', async (_, thunkAPI) => {
    try {
        const today = new Date().toISOString().split('T')[0];
        const response = await axios.get(`${BASE_URL}/3/discover/movie?api_key=03b6ee421e966831a5e3d3ff0d65eede&language=en-US&sort_by=release_date.desc&primary_release_date.lte=${today}&page=1`);
        console.log(response.data.results)
        return response.data.results;
    } catch (error) {
        console.log("error in getAllMovies:", error.message)
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const getPopularMovies = createAsyncThunk('movies/popular', async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${BASE_URL}/3/movie/popular?api_key=03b6ee421e966831a5e3d3ff0d65eede&language=en-US&page=1`);
        console.log(response.data.results)
        return response.data.results;
    } catch (error) {
        console.log("error in popularMovies:", error.message)
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const getTopRatedMovies = createAsyncThunk('movies/topRated', async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${BASE_URL}/3/movie/top_rated?api_key=03b6ee421e966831a5e3d3ff0d65eede&language=en-US&page=1`);
        console.log(response.data.results)
        return response.data.results;
    } catch (error) {
        console.log("error in getTopRatedMovies:", error.message)
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const getUpcomingMovies = createAsyncThunk('movies/upcoming', async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${BASE_URL}/3/movie/upcoming?api_key=03b6ee421e966831a5e3d3ff0d65eede&language=en-US&page=1`);
        console.log(response.data.results)
        return response.data.results;
    } catch (error) {
        console.log("error in getUpcomingMovies:", error.message)
        return thunkAPI.rejectWithValue(error.message);
    }
})