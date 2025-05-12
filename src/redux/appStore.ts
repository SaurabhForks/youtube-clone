import { configureStore } from "@reduxjs/toolkit";
import appConfigSlice from "./slices/appConfigSlice";
import videoListSlice from "./slices/videoListSlice";
import searchCacheSlice from "./slices/searchCache";
import liveChatSlice from "./slices/liveChatSlice";

export const appStore = configureStore({
  reducer: {
    appConfig: appConfigSlice,
    videoList: videoListSlice,
    searchCache: searchCacheSlice,
    liveChat: liveChatSlice,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;
