import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    postData : "",
};

const blogSlice = createSlice({
    name: "postContent",
    initialState,
    reducers: {
        add(state, action){
            state.postData = action.payload
        },
    }
})

export const {add} = blogSlice.actions;
export default blogSlice.reducer;