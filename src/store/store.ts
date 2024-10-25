import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/apiServices";
import postSlice from "./slices/postSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    statePost: postSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
