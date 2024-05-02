import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const baseUrl = 'http://localhost:9000';

export const UserSignup = createAsyncThunk('auth/signup', async (body, thunkAPI) => {
    try {
        const response = await axios.post(`${baseUrl}/api/user/signup`, body);
        console.log("response:", response)
        return response.data;
    } catch (error) {
        console.log("error:", error.message)
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const UserLogin = createAsyncThunk('auth/login', async (body, thunkAPI) => {
    try {
        const response = await axios.post(`${baseUrl}/api/user/signu`, body);
        console.log("response:", response)
        return response.data;
    } catch (error) {
        console.log("error:", error.message)
        return thunkAPI.rejectWithValue(error.message);
    }
})