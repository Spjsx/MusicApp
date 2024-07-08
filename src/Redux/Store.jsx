import { configureStore } from "@reduxjs/toolkit";
import listReducer from './Reducer/List';
import songReducer from './Reducer/SongStore';

export const Store = configureStore ({
    reducer: {
        list: listReducer,
        song: songReducer
    }
});