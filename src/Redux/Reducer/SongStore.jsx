import { createSlice } from "@reduxjs/toolkit"
import { Musiclist } from "../../data/musiclist";


const initialState = {
    value: Musiclist[0]
}

const list = createSlice({
    name: 'song',
    initialState,
    reducers: {
        changeSong: (state, action) => {
            state.value = action.payload
        },
    },
});

export const {changeSong} = list.actions;

export default list.reducer;