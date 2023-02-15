import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { GET_VIDEOS_FOLLOW_TAG } from "../../../lib/apis";

//  action creator asynchronous get video follow tag
export const filterVideoFollowTag = createAsyncThunk(
  "home/filterVideoFollowTag",
  async (data, { dispatch }) => {
    try {
      const resp = await GET_VIDEOS_FOLLOW_TAG(data);
      if (resp.status === 200) return resp.data.videos;
      throw resp;
    } catch (err) {
      throw err;
    }
  }
);

export const getAllVideo = createAsyncThunk(
  "home/getAllVideo",

  async (data) => {
    try {
      const resp = await GET_VIDEOS_FOLLOW_TAG(data);
      console.log(resp.data);
      if (resp.status === 200) return resp.data.videos;
      throw resp;
    } catch (err) {
      throw err;
    }
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    videos: [],
    loadingTag: false,
    lazyLoading: false,
    error: null,
    selectedTag: "all",
  },

  reducers: {
    selectTag: (state, action) => {
      state.selectedTag = action.payload;
    },
  },

  extraReducers: {
    [filterVideoFollowTag.pending]: (state, action) => {
      state.loadingTag = true;
    },

    [filterVideoFollowTag.fulfilled]: (state, action) => {
      state.videos = action.payload;
      state.loadingTag = false;
    },

    [filterVideoFollowTag.rejected]: (state, action) => {
      state.error = action.error;
      state.loadingTag = false;
    },

    // get all video

    [getAllVideo.pending]: (state, action) => {
      state.lazyLoading = true;
    },

    [getAllVideo.fulfilled]: (state, action) => {
      state.videos = action.payload;
      state.lazyLoading = false;
    },

    [getAllVideo.rejected]: (state, action) => {
      state.error = action.error;
      state.lazyLoading = false;
    },
  },
});

// export home slice  reducer
export default homeSlice.reducer;

//  state of home slice
export const homeState = (state) => state.home;

export const { selectTag } = homeSlice.actions;
