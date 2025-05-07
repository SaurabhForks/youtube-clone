import { createSlice } from "@reduxjs/toolkit";

interface AppConfigState {
  videos: Array<object>;
}
const initialState: AppConfigState = {
  videos: [],
};
const videoSlice = createSlice({
  name: "videoList",
  initialState: initialState,
  reducers: {
    setVideData: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export default videoSlice.reducer;
export const { setVideData } = videoSlice.actions;
