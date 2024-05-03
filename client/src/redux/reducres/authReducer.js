import { createSlice } from "@reduxjs/toolkit";
import { UserLogin, UserSignup, ValidateToken, loginUserWithToken } from "../actions/authActions";

const initialState = {
    user: {},
    isAuthenticated: false,
    loading: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder

        // signup 
        .addCase(UserSignup.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(UserSignup.fulfilled, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        })
        .addCase(UserSignup.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload ? action.payload : "Unknown error";
        })

        // login 
        .addCase(UserLogin.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(UserLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        })
        .addCase(UserLogin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload ? action.payload : "Unknown error";
        })

        // login 
        .addCase(loginUserWithToken.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(loginUserWithToken.fulfilled, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        })
        .addCase(loginUserWithToken.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload ? action.payload : "Unknown error";
        })
    }
})

export default authSlice.reducer