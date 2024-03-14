import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {};

const getAllReq = createAction("allNewsRequest");
const getAllSuc = createAction("allNewsSuccess");
const getAllF = createAction("allNewsFailure");

const getAllCatReq = createAction("allNewsCatRequest");
const getAllCatSuc = createAction("allNewsCatSuccess");
const getAllCatF = createAction("allNewsCatFailure");

export const newsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAllCatReq, (state, action) => {
      state.getNewsLoading = true;
    })
    .addCase(getAllCatSuc, (state, action) => {
      state.getNewsLoading = false;
      state.allNewsByCategory = action.payload.allNews;
    })
    .addCase(getAllCatF, (state, action) => {
      state.getNewsLoading = false;
      state.getNewsError = action.payload;
    })
    .addCase(getAllReq, (state, action) => {
      state.getAllNewsLoading = true;
    })
    .addCase(getAllSuc, (state, action) => {
      state.getAllNewsLoading = false;
      state.allNews = action.payload.allNews;
    })
    .addCase(getAllF, (state, action) => {
      state.getAllNewsLoading = false;
      state.getNewsError = action.payload;
    });
});
