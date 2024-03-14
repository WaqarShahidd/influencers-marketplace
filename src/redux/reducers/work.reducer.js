import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {};

const getReq = createAction("allWorkRequest");
const getSuc = createAction("allWorkSuccess");
const getF = createAction("allWorkFailure");

export const workReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getReq, (state, action) => {
      state.getworkLoading = true;
    })
    .addCase(getSuc, (state, action) => {
      state.getworkLoading = false;
      state.allWorks = action.payload.workResult;
    })
    .addCase(getF, (state, action) => {
      state.getworkLoading = false;
      state.getworkError = action.payload;
    });
});
