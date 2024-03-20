import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
};

const getMeReq = createAction("getProfileRequest");
const getMeSuc = createAction("getProfileSuccess");
const getMeF = createAction("getProfileFailure");

const clear = createAction("clear");

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
    })
    .addCase(clear, (state, action) => {
      state.userData = null;
    });
});
