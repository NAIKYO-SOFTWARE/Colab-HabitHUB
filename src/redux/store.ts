import { configureStore } from "@reduxjs/toolkit";
import activesReducer from "./activesSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    actives: activesReducer,
    [userSlice.reducerPath]: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
