import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {};

const getReq = createAction("allInfluencersRequest");
const getSuc = createAction("allInfluencersSuccess");
const getF = createAction("allInfluencersFailure");

const getTrendingReq = createAction("allTrendingInfluencersRequest");
const getTrendingSuc = createAction("allTrendingInfluencersSuccess");
const getTrendingF = createAction("allTrendingInfluencersFailure");

export const influencerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getReq, (state, action) => {
      state.getInfluencerLoading = true;
    })
    .addCase(getSuc, (state, action) => {
      state.getInfluencerLoading = false;
      state.allInfluencers = action.payload.allUsers;
    })
    .addCase(getF, (state, action) => {
      state.getInfluencerLoading = false;
      state.getInfluencerError = action.payload;
    })

    // Trending Influencers
    .addCase(getTrendingReq, (state, action) => {
      state.getTrendingInfluencerLoading = true;
    })
    .addCase(getTrendingSuc, (state, action) => {
      state.getTrendingInfluencerLoading = false;
      state.allTrendingInfluencers = action.payload.trendingUsers;
    })
    .addCase(getTrendingF, (state, action) => {
      state.getTrendingInfluencerLoading = false;
      state.getTrendingInfluencerError = action.payload;
    });
});
