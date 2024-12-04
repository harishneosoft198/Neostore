import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import homeReducer from './homeSlice';

export const store = configureStore({
    reducer:{
        user:userReducer,
        home:homeReducer
    }
})