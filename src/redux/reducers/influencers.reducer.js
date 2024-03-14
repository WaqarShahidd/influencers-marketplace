import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {};

const getReq = createAction("allInfluencersRequest");
const getSuc = createAction("allInfluencersSuccess");
const getF = createAction("allInfluencersFailure");

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
    });
});
