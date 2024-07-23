import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = "03b6ee421e966831a5e3d3ff0d65eede";
const BASE_URL = "https://api.themoviedb.org";

export const searchMovies = createAsyncThunk(
  "search/q",
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/3/search/movie?api_key=03b6ee421e966831a5e3d3ff0d65eede&language=en-US&page=1`
      );
      // console.log(response.data.results)
      return response.data.results;
    } catch (error) {
      console.log("error in getTopRatedMovies:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
