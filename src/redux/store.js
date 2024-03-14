import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userDataReducer } from "./reducers/profileReducer";
import { influencerReducer } from "./reducers/influencers.reducer";
import { newsReducer } from "./reducers/news.reducer";
import { pitchReducer } from "./reducers/pitch.reducer";
import { workReducer } from "./reducers/work.reducer";
import { upcomingReducer } from "./reducers/birthdays.reducer";

const { configureStore, combineReducers } = require("@reduxjs/toolkit");
const rootPersistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userDataReducer,
  influencer: influencerReducer,
  news: newsReducer,
  pitch: pitchReducer,
  work: workReducer,
  upcoming: upcomingReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;

export const persistor = persistStore(store);
