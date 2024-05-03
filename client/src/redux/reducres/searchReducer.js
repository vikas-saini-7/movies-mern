import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchedData: [],
    loading: false,
    error: null
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
    }
})

export default searchSlice.reducer