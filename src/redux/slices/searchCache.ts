import { createSlice } from "@reduxjs/toolkit";

interface searchCacheState {
  results: object;
}
const initialState: searchCacheState = {
  results: {},
};

const searchCacheSlice = createSlice({
  name: "searchCache",
  initialState: initialState,
  reducers: {
    setCache: (state, action) => {
      Object.assign(state.results, action.payload);
    },
  },
});

export default searchCacheSlice.reducer;
export const { setCache } = searchCacheSlice.actions;
