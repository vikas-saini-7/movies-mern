import {configureStore} from '@reduxjs/toolkit'
import authReducer from './reducres/authReducer'
import movieReducer from './reducres/movieReducer'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        movies: movieReducer
    }
})