import { createSlice } from "@reduxjs/toolkit";
import { Musiclist } from "../../data/musiclist";


const initialState = {
    value: Musiclist
};

export const list = createSlice({
    name: 'list',
    initialState,
    reducers: {
        changeList: (state, action) => {
            state.value = action.payload
        },
    },

});

export const { changeList } = list.actions;

export default list.reducer;