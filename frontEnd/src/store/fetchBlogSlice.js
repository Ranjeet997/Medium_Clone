import { createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const initialState = {
  data: [],
  status: STATUSES.IDLE,
};

const postSlice = createSlice({
  name: "blogpost",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setPosts, setStatus } = postSlice.actions;
export default postSlice.reducer;

export function fetchAllPost() {
  return async function fetchPostThunk(dispatch, getStates) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch("http://localhost:8080/api/blog/readBlog");
      const Data = await res.json();
      dispatch(setPosts(Data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}


