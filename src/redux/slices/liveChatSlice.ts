import { createSlice } from "@reduxjs/toolkit";

interface LiveChat {
  chats: Array<object>;
}
const initialState: LiveChat = {
  chats: [],
};
const liveChat = createSlice({
  name: "liveChat",
  initialState: initialState,
  reducers: {
    setChat: (state, action) => {
      state.chats.push(action.payload);
      if (state.chats.length > 10) {
        state.chats.splice(0, 1);
      }
    },
  },
});

export const { setChat } = liveChat.actions;
export default liveChat.reducer;
