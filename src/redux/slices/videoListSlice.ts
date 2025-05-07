import { createSlice } from "@reduxjs/toolkit";

interface AppConfigState {
  videos: Array<object>;
  serachResult: Array<object>;
}
const initialState: AppConfigState = {
  videos: [],
  serachResult: [],
};
const videoSlice = createSlice({
  name: "videoList",
  initialState: initialState,
  reducers: {
    setVideData: (state, action) => {
      state.videos = action.payload;
    },
    setSearchResult: (state, action) => {
      state.serachResult = action.payload;
    },
  },
});

export default videoSlice.reducer;
export const { setVideData, setSearchResult } = videoSlice.actions;
