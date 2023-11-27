import { createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const initialState = {
  individualData: [],
  status: STATUSES.IDLE,
};

const individualPostSlice = createSlice({
  name: "individualPost",
  initialState,
  reducers: {
    setIndivisualPost(state, action) {
      state.individualData = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const {setIndivisualPost, setStatus } = individualPostSlice.actions;
export default individualPostSlice.reducer;


export function fetchIndividualPost(user_id) {
  console.log("this is userId get from redux funcxtion",user_id);
  return async function fetchPostThunk(dispatch, getStates) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch(`http://localhost:8080/api/blog/readIndividualData/${user_id}`);
      const Data = await res.json();
      dispatch(setIndivisualPost(Data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
