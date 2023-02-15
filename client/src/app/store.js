import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "../features/Home/state/homeSlice";
import watchVideoSlice from "../features/WatchVideo/state/watchVideoSlice";

const reducer = {
  home: homeSlice,
  watchVideo: watchVideoSlice,
};

const store = configureStore({ reducer });

export default store;
