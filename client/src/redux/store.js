import {configureStore} from '@reduxjs/toolkit'
import authReducer from './reducres/authReducer'

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})