import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {};

const getPitchReq = createAction("allPitchRequest");
const getPitchSuc = createAction("allPitchSuccess");
const getPitchF = createAction("allPitchFailure");

export const pitchReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getPitchReq, (state, action) => {
      state.getPitchLoading = true;
    })
    .addCase(getPitchSuc, (state, action) => {
      state.getPitchLoading = false;
      state.allPitches = action.payload.pitchResult;
    })
    .addCase(getPitchF, (state, action) => {
      state.getPitchLoading = false;
      state.getPitchError = action.payload;
    });
});
