import { persistStore, persistReducer, PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage";
import SchoolReducer from "./schoolSlice/schoolSlice";
import AuthReducer from './AuthSlice/AuthSlice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  school: SchoolReducer,
  Auth:AuthReducer,
});

const persisitedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persisitedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export const persistor = persistStore(store);
