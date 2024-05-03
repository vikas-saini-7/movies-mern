import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const baseUrl = 'http://localhost:9000';

export const UserSignup = createAsyncThunk('auth/signup', async (body, thunkAPI) => {
    try {
        const response = await axios.post(`${baseUrl}/api/user/signup`, body);
        if(response){
            let token = response.data.token;
            localStorage.setItem('token', token);
        }
        return response.data.userDetails;
    } catch (error) {
        console.log("error:", error.message)
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const UserLogin = createAsyncThunk('auth/login', async (body, thunkAPI) => {
    try {
        const response = await axios.post(`${baseUrl}/api/user/login`, body);
        if(response){
            let token = response.data.token;
            localStorage.setItem('token', token);
        }
        return response.data.userDetails;
    } catch (error) {
        console.log("error:", error.message)
        return thunkAPI.rejectWithValue(error.message);
    }
})

// login with token 
export const loginUserWithToken = createAsyncThunk(
    'auth/loginUserWithToken',
    async (token, thunkAPI) => {
      try {
        // Perform API request to validate the token or fetch user data
        const response = await axios.post(`${baseUrl}/api/user/validateToken`, null, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return response.data;
      } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.message); // Handle API errors gracefully
      }
    }
  );