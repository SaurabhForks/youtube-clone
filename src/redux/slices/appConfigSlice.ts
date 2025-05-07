import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface AppConfigState {
  sideBarToggle: boolean;
}
const initialState: AppConfigState = {
  sideBarToggle: true,
};
const appConfigSlice = createSlice({
  name: "appConfig",
  initialState,
  reducers: {
    toggleSidebar: (state, action: PayloadAction<boolean>) => {
      state.sideBarToggle = action.payload;
    },
  },
});

export const { toggleSidebar } = appConfigSlice.actions;
export default appConfigSlice.reducer;
