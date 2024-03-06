import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const { configureStore, combineReducers } = require("@reduxjs/toolkit");
const rootPersistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;

export const persistor = persistStore(store);
