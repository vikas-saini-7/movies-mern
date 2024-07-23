import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducres/authReducer";
import movieReducer from "./reducres/movieReducer";
import seriesReducer from "./reducres/seriesReducer";
import searchReducer from "./reducres/searchReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: movieReducer,
    series: seriesReducer,
    search: searchReducer,
  },
});
