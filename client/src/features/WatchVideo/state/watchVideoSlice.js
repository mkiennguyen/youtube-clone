import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SUBSCRIBED_VIDEO } from "../../../lib/apis";

export const subscribeVideo = createAsyncThunk(
  "watchVideo/subscribedVideo",

  async (data, thunkAPI) => {
    try {
      const resp = await SUBSCRIBED_VIDEO(data);
      if (resp.status === 200) return resp.data;
      throw resp;
    } catch (err) {
      throw err;
    }
  }
);
const watchVideoSlice = createSlice({
  name: "watchVideo",
  initialState: {
    video: null,
    loading: null,
    error: null,
    subscribe: null,
    subscribeError: null,
    liked: null,
    typingComment: null,
  },

  extraReducers: {
    [subscribeVideo.fulfilled]: (state, action) => {
      state.subscribe = action.payload;
    },

    [subscribeVideo.rejected]: (state, action) => {
      state.subscribeError = action.error;
    },
  },
});

export default watchVideoSlice.reducer;

export const watchVideoState = (state) => state.watchVideo;
