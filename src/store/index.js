import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./slices/tokenSlice.slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

// aqui ponemos el motor de almacenamiento, en este caso storage.
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["credential"],
};

// anido mis reducers.
const rootReducer = combineReducers({
  credential: tokenSlice,
});

// aqui paso mis reducer que quiero que persistan.
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

// el middleware "thunk" interceptara y detendra los valores no serializables.

export const persistor = persistStore(store);
