import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {};

const getReq = createAction("allJobsRequest");
const getSuc = createAction("allJobsSuccess");
const getF = createAction("allJobsFailure");

export const jobReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getReq, (state, action) => {
      state.getJobLoading = true;
    })
    .addCase(getSuc, (state, action) => {
      state.getJobLoading = false;
      state.allJobs = action.payload.jobResult;
    })
    .addCase(getF, (state, action) => {
      state.getJobLoading = false;
      state.getJobError = action.payload;
    });
});
