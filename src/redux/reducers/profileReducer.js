import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {};

const getMeReq = createAction("getProfileRequest");
const getMeSuc = createAction("getProfileSuccess");
const getMeF = createAction("getProfileFailure");

export const userDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getMeReq, (state, action) => {
      state.getProfileLoading = true;
    })
    .addCase(getMeSuc, (state, action) => {
      state.getProfileLoading = false;
      state.userData = action.payload.user;
    })
    .addCase(getMeF, (state, action) => {
      state.getProfileLoading = false;
      state.getProfileError = action.payload;
    });
});
