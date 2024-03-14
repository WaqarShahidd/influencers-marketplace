import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {};

const getReq = createAction("upcomingRequest");
const getSuc = createAction("upcomingSuccess");
const getF = createAction("upcomingFailure");

export const upcomingReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getReq, (state, action) => {
      state.upcomingLoading = true;
    })
    .addCase(getSuc, (state, action) => {
      state.upcomingLoading = false;
      state.upcomingBirthday = action.payload.upcomingBirthdays;
    })
    .addCase(getF, (state, action) => {
      state.upcomingLoading = false;
      state.upcomingError = action.payload;
    });
});
