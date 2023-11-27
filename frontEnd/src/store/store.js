import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blogSlice";
import postSlice from "./fetchBlogSlice";
import individualPostSlice from "./fetchIndividualPost";

const store = configureStore({
    reducer: {
        'blogpost' : postSlice,
        'postContent' : blogSlice,
        "individualPost" : individualPostSlice,
    }
});

export default store;