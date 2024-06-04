import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const apiKey = 'YOUR_API_KEY';
const baseUrl = 'https://api.themoviedb.org/3';

export const Search = createAsyncThunk('search/q', async (query, thunkAPI) => {
    try {
        const response = await axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`);
        return response.data.results;
    } catch (error) {
        console.error('Error searching movies:', error);
        return [];
    }
})