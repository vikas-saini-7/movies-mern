import {configureStore} from '@reduxjs/toolkit'
import authReducer from './reducres/authReducer'
import movieReducer from './reducres/movieReducer'
import seriesReducer from './reducres/seriesReducer'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        movies: movieReducer,
        series: seriesReducer
    }
})