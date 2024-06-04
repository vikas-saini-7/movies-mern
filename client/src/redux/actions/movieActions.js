import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const baseUrl = '';

export const some = createAsyncThunk('auth/some', async (body, thunkAPI) => {
    try {
        const response = await axios.post(`${baseUrl}`, body);
        return response.data;
    } catch (error) {
        console.log("error:", error.message)
        return thunkAPI.rejectWithValue(error.message);
    }
})