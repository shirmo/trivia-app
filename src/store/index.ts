import { configureStore } from "@reduxjs/toolkit";
import triviaReducer from "./triviaSlice";

const store = configureStore({
  reducer: {
    trivia: triviaReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;